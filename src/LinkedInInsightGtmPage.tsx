import React, { useState } from 'react';
import { PenTool, Phone, BarChart, BookOpen, GitMerge, Target, TrendingUp, Zap, Users, Globe, Star, Shield, PlayCircle, Clock, Link as LinkIcon, MessageCircle, Mic, AlertCircle, CheckCircle2, ShieldAlert, LineChart, FileText, Magnet, MessageSquare, Briefcase, Share2, Brain, MonitorPlay, CalendarDays, RefreshCcw, Layers } from 'lucide-react';

const ArcadiaLogo = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15.41 3.53H19.78L12.35 18.06H7.98L15.41 3.53Z" />
    <path d="M6.02 12.37H10.39L8.21 16.65H3.84L6.02 12.37Z" />
  </svg>
);

export const LinkedInInsightGtmPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {
  const [isSummary, setIsSummary] = useState(false);

  return (
    <div className="max-w-4xl mx-auto w-full pb-20 animate-in fade-in duration-300">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
          <ArcadiaLogo />
          <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_parent')}>Arcadia</span>
          <span className="text-zinc-700">/</span>
          <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_insight_parent')}>Insight</span>
        </div>
        
        <div className="flex items-center bg-[#1A1A1E] rounded-lg p-1 border border-zinc-800">
          <button 
            onClick={() => setIsSummary(false)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${!isSummary ? 'bg-[#27272A] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            Completo
          </button>
          <button 
            onClick={() => setIsSummary(true)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${isSummary ? 'bg-[#27272A] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            Resumido
          </button>
        </div>
      </div>
      
      <div className="animate-in fade-in duration-300">
        <div className="flex items-start gap-5 mb-10">
          <div className="border border-zinc-700/50 p-3.5 rounded-2xl text-zinc-300 bg-[#1A1A1E] mt-1 shadow-xl">
            <BarChart size={28} strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">Arquitectura GTM de Generación de Demanda B2B</h2>
            <p className="text-zinc-400 text-[16px] leading-relaxed">
              {isSummary 
                ? "El presentador ofrece una visión holística sobre el mundo de los negocios digitales para llegar a la arquitectura GTM más rentable para servicios B2B."
                : "El presentador (Guillermo Yuste, conocido como \"Will Martin\" en inglés y \"Guillermo Vespucci\"/\"Spuchi\" en español) plantea el objetivo de la sesión: ofrecer una visión holística sobre el mundo de los negocios digitales para llegar a la arquitectura de estrategia Go to Market (GTM) más rentable para empresas de servicios digitales B2B, combinando lo mejor de dos \"mundos\" que él llama metafóricamente \"el internet de ClickFunnels\" y \"el internet de HubSpot\"."}
            </p>
          </div>
        </div>

        {/* Video Embed */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden border border-zinc-800/80 shadow-2xl mb-10 bg-[#121214]">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/cOU3y81HPyE" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>

        {/* 1. Introducción */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">1</div> 
            El prefacio: Paul Graham y los retornos superlineales
          </h3>
          <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
            <p className="text-[15px] text-zinc-400 leading-relaxed">
              {isSummary 
                ? "La revolución digital ha cambiado cómo trabajamos. Las redes sociales permiten una distribución orgánica descentralizada y gratuita." 
                : "Como marco conceptual, cita el ensayo de Paul Graham (cofundador de Y Combinator) sobre los \"retornos superlineales\". La idea central: la revolución digital ha cambiado a nivel fundamental cómo trabajamos, cómo cobramos y durante cuánto tiempo. Antes las organizaciones concentraban el poder, el prestigio y la distribución; ahora las redes sociales permiten una distribución orgánica descentralizada y casi gratuita, dando oportunidades a gente que antes no las tenía."}
            </p>
          </div>
        </div>

        {/* 2. Las dos manifestaciones */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">2</div> 
            Las dos manifestaciones de la revolución digital
          </h3>
          <p className="text-[16px] text-zinc-400 mb-8 leading-relaxed">
            {isSummary 
              ? "Existen dos mundos ('ClickFunnels' vs 'HubSpot') con 9 pilares diferenciales. Esta diferenciación no es absolutista, hay matices." 
              : "El presentador aclara un disclaimer importante: esta diferenciación no es absolutista; hay matices y solapamientos entre ambos mundos, pero se presentan de forma extrema para que las diferencias se entiendan con claridad.\n\nSe analizan nueve pilares diferenciales: mentalidad, propuesta de valor, audiencia objetivo, impacto social, concepción del éxito, modelos de precios, estrategia Go to Market, industrias dominantes, longevidad, valoración de mercado y estructura organizacional."}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><Brain size={18}/></div>
                <h4 className="font-semibold text-white text-lg">1. Mentalidad</h4>
              </div>
              <ul className="text-[15px] text-zinc-400 leading-relaxed list-disc pl-4 space-y-2">
                <li><strong>ClickFunnels:</strong> {isSummary ? "Crecimiento a toda costa, foco en cashflow." : "\"growth at all cost\" (crecimiento a toda costa). Foco en el cashflow inmediato, sin importar cuánto se gasta en marketing/ventas/tecnología, porque lo que importa es la facturación actual."}</li>
                <li><strong>HubSpot:</strong> {isSummary ? "Crecimiento eficiente y rentable." : "\"profitable efficient growth\" (crecimiento eficiente y rentable). El foco está en la valoración empresarial, no en el cashflow inmediato."}</li>
              </ul>
            </div>
            
            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><Star size={18}/></div>
                <h4 className="font-semibold text-white text-lg">2. Propuesta de valor</h4>
              </div>
              <ul className="text-[15px] text-zinc-400 leading-relaxed list-disc pl-4 space-y-2">
                <li><strong>ClickFunnels:</strong> {isSummary ? "Overpromise, under deliver. Foco en estatus." : "overpromise, under deliver (se promete de más y se entrega de menos), con foco en el estatus. Ocurre en productos, infoproductos y servicios por igual; es una cuestión de mentalidad: \"a ver qué le puedo sacar al mercado con lo poco que le doy\"."}</li>
                <li><strong>HubSpot:</strong> {isSummary ? "Under promise, over deliver." : "under promise, over deliver. Sacrificio por el cliente, aportar más de lo pagado para generar recompra recurrente, porque el objetivo final es la valoración empresarial vía impacto recurrente."}</li>
              </ul>
            </div>

            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><Users size={18}/></div>
                <h4 className="font-semibold text-white text-lg">3. Audiencia objetivo</h4>
              </div>
              <ul className="text-[15px] text-zinc-400 leading-relaxed list-disc pl-4 space-y-2">
                <li><strong>ClickFunnels:</strong> {isSummary ? "Consumidores y pymes (SMB)." : "consumidores y pymes (SMB), gente con baja consciencia de marketing/ventas sofisticado, que busca \"transformación\"."}</li>
                <li><strong>HubSpot:</strong> {isSummary ? "B2B, B2C2B y profesionales." : "B2B, B2C2B (modelo Slack, monday.com: entras vendiendo a un individuo y terminas vendiendo dentro de toda la empresa) y consumidores profesionales/ejecutivos con mayores ingresos."}</li>
              </ul>
            </div>

            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><Globe size={18}/></div>
                <h4 className="font-semibold text-white text-lg">4. Impacto social</h4>
              </div>
              <ul className="text-[15px] text-zinc-400 leading-relaxed list-disc pl-4 space-y-2">
                <li><strong>ClickFunnels:</strong> {isSummary ? "Individual, cortoplacista." : "enfoque individual, cortoplacista, con límite de tiempo definido."}</li>
                <li><strong>HubSpot:</strong> {isSummary ? "Solución perdurable." : "busca dar una solución perdurable, con impacto no solo en una categoría de mercado sino en toda una industria (ejemplo: Slack no solo revolucionó la mensajería, sino toda la operativa digital interna de las empresas gracias a sus integraciones)."}</li>
              </ul>
            </div>
            
            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><Target size={18}/></div>
                <h4 className="font-semibold text-white text-lg">5. Concepción del éxito</h4>
              </div>
              <ul className="text-[15px] text-zinc-400 leading-relaxed list-disc pl-4 space-y-2">
                <li><strong>ClickFunnels:</strong> {isSummary ? "Conversiones y volumen." : "conversiones y volumen de ventas."}</li>
                <li><strong>HubSpot:</strong> {isSummary ? "Retención, LTV y eficiencia de GTM." : "retención, LTV y eficiencia de Go to Market, un ratio que se calcula dividiendo el Net New ARR (ingresos recurrentes anuales nuevos netos) entre el coste de marketing+ventas+tecnología+talento+CAC, multiplicado por 100. Ejemplo: Dropbox tiene una eficiencia GTM del 500%. El presentador señala una debilidad del modelo HubSpot: al priorizar el valor a largo plazo, suele generar cashflow más lentamente, por lo que muchas empresas de software B2B hoy tienen eficiencias GTM por debajo del 100%."}</li>
              </ul>
            </div>

            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><Zap size={18}/></div>
                <h4 className="font-semibold text-white text-lg">6. Modelo de precios y estrategia GTM</h4>
              </div>
              <ul className="text-[15px] text-zinc-400 leading-relaxed list-disc pl-4 space-y-2">
                <li><strong>ClickFunnels:</strong> {isSummary ? "Arbitrarios, lanzamientos, FOMO." : "precios arbitrarios, sobreprecio basado en estatus (ej. mentorías de $25,000 calentadas en eventos en vivo), lanzamientos, FOMO (fear of missing out)."}</li>
                <li><strong>HubSpot:</strong> {isSummary ? "Basado en valor, recurrente, evergreen." : "pricing basado en valor, justificado, recurrente, \"evergreen\" y racional."}</li>
              </ul>
            </div>

            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><Briefcase size={18}/></div>
                <h4 className="font-semibold text-white text-lg">7. Industrias dominantes</h4>
              </div>
              <ul className="text-[15px] text-zinc-400 leading-relaxed list-disc pl-4 space-y-2">
                <li><strong>ClickFunnels:</strong> {isSummary ? "Infoproductos, coaching." : "infoproductos, coaching, marketing multinivel."}</li>
                <li><strong>HubSpot:</strong> {isSummary ? "STEM, software B2B." : "STEM (ciencia, tecnología, ingeniería, matemáticas), software y servicios B2B."}</li>
              </ul>
            </div>

            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><Clock size={18}/></div>
                <h4 className="font-semibold text-white text-lg">8. Longevidad</h4>
              </div>
              <ul className="text-[15px] text-zinc-400 leading-relaxed list-disc pl-4 space-y-2">
                <li><strong>ClickFunnels:</strong> {isSummary ? "Depende de tendencias." : "depende de tendencias y fiebres del oro."}</li>
                <li><strong>HubSpot:</strong> {isSummary ? "Depende de moats." : "depende de los \"moats\" (fosos), es decir, ventajas competitivas reales (efectos de red, etc.) que protegen de la competencia a medida que la empresa crece."}</li>
              </ul>
            </div>

            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><LineChart size={18}/></div>
                <h4 className="font-semibold text-white text-lg">9. Valoración de mercado y estructura organizacional</h4>
              </div>
              <ul className="text-[15px] text-zinc-400 leading-relaxed list-disc pl-4 space-y-2">
                <li><strong>ClickFunnels:</strong> {isSummary ? "Sin valoración, puro cashflow." : "valoración inexistente, negocios de puro cashflow sin equity, foco excesivo en marketing/ventas con talento, procesos y tecnología rudimentarios."}</li>
                <li><strong>HubSpot:</strong> {isSummary ? "Valoraciones billonarias, IPOs." : "valoraciones de miles de millones, IPOs, venture capital y private equity; foco en producto, customer success, finanzas, talento, procesos y tecnología avanzada."}</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-5 mb-8">
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2"><Layers size={18} className="text-[#D5B15B]"/> Analogías ilustrativas</h4>
            {!isSummary && <p className="text-zinc-400 mb-3 text-[15px]">Para hacer tangibles las diferencias, el presentador compara:</p>}
            <ul className="text-zinc-400 text-[15px] space-y-2 list-disc pl-4">
              <li>{isSummary ? "Fitness vs Salesforce." : "Un grupo de fitness que vende a personas con baja autoestima vs. Salesforce ayudando a Santander UK con su CRM (market cap de $280.000 millones)."}</li>
              <li>{isSummary ? "Ebook vs Adobe Creative Cloud." : "Un ebook con \"métodos secretos\" vs. Adobe Creative Cloud (market cap ~$200.000 millones)."}</li>
              <li>{isSummary ? "Infoproductor vs Shopify." : "Un infoproductor con alta tasa de abandono y backlash vs. Shopify (~$100.000 millones de valoración, 4,8 millones de tiendas, $400.000 millones de volumen transaccional anual)."}</li>
              <li>{isSummary ? "Gurú fitness vs Atlassian." : "Un gurú de fitness promedio cobrando menos que un account executive vs. Atlassian (Confluence, Jira, Trello), con $50.000 millones de valoración y una eficiencia GTM de 67%."}</li>
            </ul>
          </div>
        </div>

        {/* 3. Definición de estrategia GTM */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">3</div> 
            Definición de estrategia Go to Market
          </h3>
          <p className="text-[16px] text-zinc-400 mb-8 leading-relaxed">
            {isSummary 
              ? "GTM es el proceso que involucra a producto, marketing, ventas y customer success para entregar valor, atraer y retener." 
              : "Es el proceso que involucra a producto, marketing, ventas y customer success (en B2C sería customer support) para definir cómo se entrega la propuesta de valor al mercado objetivo, atraer clientes potenciales, convertirlos y retenerlos."}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
              <h4 className="font-semibold text-white text-lg mb-3 text-[#D5B15B]">GTM del internet ClickFunnels: impulsivo, emocional, guerrillero</h4>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {isSummary 
                  ? "Basado en lanzamientos, hype y contenido vertical." 
                  : "Estos tres principios llevan naturalmente a los lanzamientos: son puntuales, no requieren impacto recurrente, generan hype, y encajan con el ecosistema tecnológico del consumidor promedio (WhatsApp Business, Instagram DMs a escala mediante \"farms\" de teléfonos, cold email/DM masivo). Se apoya en contenido corto vertical (reels) que dirige tráfico hacia mensajería automatizada."}
              </p>
            </div>
            
            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
              <h4 className="font-semibold text-white text-lg mb-3 text-[#D5B15B]">GTM del internet HubSpot: racional, reflexivo, basado en valor</h4>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {isSummary 
                  ? "Modelo evergreen. Foco en SEO, LinkedIn y ads programáticos." 
                  : "Lleva a un modelo evergreen (mismo precio siempre, sin lanzamientos ni hype). El presentador advierte un problema serio del \"performance/guerrilla marketing\": al centrarse tanto en datos (Google Sheets, conversiones, píxeles, CTRs), muchos marketers se desconectan de los fundamentos psicológicos del marketing (las 4Ps, cómo piensa y responde la gente). Este modelo prioriza SEO, LinkedIn orgánico, anuncios programáticos y contenido en vídeo horizontal — todos con mayor coste de implementación inicial pero mayor impacto sostenido."}
              </p>
              {!isSummary && (
                <p className="text-[15px] text-zinc-400 leading-relaxed mt-3">
                  También distingue claramente entre <strong>email marketing</strong> (contactar suscriptores opt-in, foco en nutrir la lista) y <strong>cold email/outbound</strong> (contactar desconocidos comprados de una base de datos, foco en agendar llamadas) — remarca que mucha gente los confunde y no son lo mismo.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 4. Pros y Contras */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">4</div> 
            Pros y contras de cada modelo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
              <h4 className="font-semibold text-white text-lg mb-4 text-[#D5B15B]">ClickFunnels</h4>
              <div className="space-y-4">
                <div>
                  <span className="text-green-400 font-medium text-[15px] flex items-center gap-2"><CheckCircle2 size={16}/> ClickFunnels — Pros:</span>
                  <ul className="text-[15px] text-zinc-400 mt-2 list-disc pl-4 space-y-1">
                    {!isSummary && <li>Cashflow mucho más rápido.</li>}
                    {!isSummary && <li>Mayor consciencia de la mente del consumidor (inteligencia social muy alta).</li>}
                    {!isSummary && <li>Suele estar más cerca del comprador, resuena más profundamente con ganchos emocionales y sesgos cognitivos.</li>}
                    {!isSummary && <li>Captura mayor porcentaje de la demanda disponible.</li>}
                    {isSummary && <li>Cashflow rápido y gran inteligencia social.</li>}
                  </ul>
                </div>
                <div>
                  <span className="text-red-400 font-medium text-[15px] flex items-center gap-2 mt-4"><AlertCircle size={16}/> ClickFunnels — Contras:</span>
                  <ul className="text-[15px] text-zinc-400 mt-2 list-disc pl-4 space-y-1">
                    {!isSummary && <li>Dependencia fuerte del <em>paid media</em> (algunos fundadores de HubSpot lo llaman "falso product-market fit": comprar clientes vía ads puede ser una forma de esconder que nadie quiere tu producto lo suficiente).</li>}
                    {!isSummary && <li>Esencia de ejecutor, no de estratega (se mete en el "barro" sin cuestionar si ese barro merece la pena).</li>}
                    {!isSummary && <li>Retornos decrecientes proporcionales al nivel de sofisticación del mercado: solo el 3-5% del mercado B2B está "in-market" en un momento dado; capturar solo esa demanda disponible sin crear demanda nueva significa que, a medida que el mercado se sofistica y hay más competencia, los retornos caen (efecto "winner takes all").</li>}
                    {!isSummary && <li>No crea demanda nueva, por lo que pierde longevidad y no construye un "moat" real.</li>}
                    {isSummary && <li>Dependencia en ads, retornos decrecientes, no crea demanda nueva.</li>}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
              <h4 className="font-semibold text-white text-lg mb-4 text-[#D5B15B]">HubSpot</h4>
              <div className="space-y-4">
                <div>
                  <span className="text-green-400 font-medium text-[15px] flex items-center gap-2"><CheckCircle2 size={16}/> HubSpot — Pros:</span>
                  <ul className="text-[15px] text-zinc-400 mt-2 list-disc pl-4 space-y-1">
                    {!isSummary && <li>Construye valor empresarial real.</li>}
                    {!isSummary && <li>Esencia de estratega.</li>}
                    {!isSummary && <li>Acceso al "meta" (most effective tactics available): el mejor talento, procesos y tecnología disponibles — algo que ClickFunnels no puede costear.</li>}
                    {isSummary && <li>Valor empresarial real, mejor talento y tecnología.</li>}
                  </ul>
                </div>
                <div>
                  <span className="text-red-400 font-medium text-[15px] flex items-center gap-2 mt-4"><AlertCircle size={16}/> HubSpot — Contras:</span>
                  <ul className="text-[15px] text-zinc-400 mt-2 list-disc pl-4 space-y-1">
                    {!isSummary && <li>Puede tardar más en generar cashflow (requiere cruzar una "simetría negativa entre esfuerzo y resultado": hay que esforzarse mucho tiempo sin ver resultados inmediatos antes de cruzar el umbral de rentabilidad).</li>}
                    {!isSummary && <li>Expectativas del prospecto más bajas (sin promesas ni garantías llamativas).</li>}
                    {!isSummary && <li>A veces peca de desconectarse del comprador o de no vender suficiente el producto en sí — menciona la tendencia en EE.UU. de esconder la falta de venta de producto detrás de "thought leadership" (mostrar colaboraciones, eventos, logos nuevos, etc. en vez de hablar del problema/solución real).</li>}
                    {isSummary && <li>Lento para generar cashflow, a veces se desconecta del comprador.</li>}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Allbound GTM + Signal-Based Selling */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">5</div> 
            La parte práctica: Allbound GTM + Signal-Based Selling
          </h3>
          <p className="text-[16px] text-zinc-400 mb-8 leading-relaxed">
            {isSummary 
              ? "El núcleo accionable: pasar de perseguir clientes a atraerlos. Crear demanda en vez de solo capturar la disponible." 
              : "Este es el núcleo accionable de la charla. El punto de partida es un cambio de mentalidad: pasar de querer alcanzar/perseguir clientes a atraerlos; de capturar demanda disponible a convertir prospectos de \"out-market\" a \"in-market\" haciendo que la primera opción en su mente ya sea tu solución."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
              <h4 className="font-semibold text-white text-lg mb-3">La metáfora de la atracción vs. la persecución</h4>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {isSummary 
                  ? "No persigas a prospectos fríos. Crear demanda es hacer que vibren en tu esfera." 
                  : "Usa una analogía sobre relaciones interpersonales: nadie envía 18 seguimientos a alguien que claramente no está interesado. De la misma manera, no tiene sentido perseguir agresivamente a leads fríos. Crear demanda es conseguir que aquello que crees que te pertenece esté vibrando en tu esfera; capturarla es ir a presionar y empujar hacia ello para traerlo hacia ti — y esto último, llevado al extremo, es casi tóxico."}
              </p>
            </div>

            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
              <h4 className="font-semibold text-white text-lg mb-3">De outsider a insider</h4>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {isSummary 
                  ? "La mensajería de ventas debe ser específica y empática (insider), no genérica ni desesperada." 
                  : "Cita un post de Josh Brown (copywriter) sobre la diferencia entre mensajería de ventas de un \"outsider\" (genérica, desesperada: \"solo hago seguimiento\", \"¿qué te mantiene despierto por la noche?\") y la de un \"insider\" (específica, empática, que demuestra conocimiento real del contexto del prospecto: \"muchos de los clientes con los que trabajamos están teniendo este problema, ¿cómo lo estás gestionando tú?\"). El lenguaje que demuestra conocimiento genuino genera confianza — y la confianza es la razón por la que la gente compra."}
              </p>
            </div>

            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
              <h4 className="font-semibold text-white text-lg mb-3">Por qué el outbound tradicional ya no funciona bien</h4>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {isSummary 
                  ? "Métricas cayendo, barreras de entrada bajas por la IA (spam masivo), filtros endurecidos por Google." 
                  : "Tres motivos: las métricas de outbound han caído en EE.UU., las barreras de entrada bajaron gracias a la IA (herramientas que permiten mandar 150.000 emails/mes por ~$200), y por eso las bandejas de los CEOs están saturadas; Google y Microsoft han endurecido los filtros de spam."}
              </p>
            </div>
            
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-[1.25rem] p-6 shadow-md">
              <h4 className="font-semibold text-white text-lg mb-3 text-[#D5B15B]">Los dos conceptos clave: Allbound GTM y Signal-Based Selling</h4>
              <ul className="text-[15px] text-zinc-400 leading-relaxed space-y-4">
                <li>
                  <strong className="text-white">Allbound:</strong> {isSummary ? "Combinar inbound/outbound." : "combinar estrategias inbound y outbound para generar señales de primera mano (first party): interacciones en tu propio ecosistema de contenidos (web, LinkedIn, podcast, YouTube, ads propios). Ejemplos de señales: visita a un perfil, visita a la web, un DM, un like en una historia."}
                </li>
                <li>
                  <strong className="text-white">Señales de segunda mano:</strong> {isSummary ? "Ocurren en productos partner." : "ocurren en productos de los que eres afiliado/partner (ej. si alguien compra créditos en una herramienta de la que eres partner, eso indica intención)."}
                </li>
                <li>
                  <strong className="text-white">Señales de tercera mano (third party):</strong> {isSummary ? "No se recomiendan." : "las que venden proveedores de \"intent data\" (6sense, Bombora, ZoomInfo). El presentador es tajante: no recomienda comprarlas, porque son caras y la mayoría de veces no funcionan bien; se basan en scraping de IPs corporativas y búsquedas en Google."}
                </li>
                <li>
                  <strong className="text-white">Signal-based selling:</strong> {isSummary ? "Activar señales para vender." : "(también llamado \"inbound-led outbound\"): el proceso de recolectar, ordenar, filtrar y activar esas señales para iniciar un proceso de ventas."}
                </li>
              </ul>
            </div>

            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors md:col-span-2">
              <h4 className="font-semibold text-white text-lg mb-3 text-[#D5B15B]">Las tres capas de consciencia (funnel clásico)</h4>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {isSummary 
                  ? "Cubre C1 (no consciente), C2 (consciente del problema), C3 (consciente de ambos)." 
                  : "El ecosistema de contenidos de un allbound GTM cubre: C1 (no consciente ni del problema ni de la solución), C2 (consciente del problema pero no de la solución) y C3 (consciente de ambos) — equivalentes a awareness, consideration y conversion."}
              </p>
            </div>
          </div>
        </div>

        {/* 6. Señales y Tácticas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">6</div> 
            Señales prioritarias y tácticas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors md:col-span-2">
              <h4 className="font-semibold text-white text-lg mb-4 text-[#D5B15B]">Los cuatro tipos de señales que él prioriza</h4>
              <ol className="list-decimal pl-6 text-[15px] text-zinc-400 leading-relaxed space-y-2">
                <li>Visitas a la web identificadas a nivel de empresa.</li>
                <li>Visitas a la web identificadas a nivel de persona (en EE.UU. se puede resolver hasta un 30-35% del tráfico; en mercados hispanos la resolución es peor porque el GDPR europeo no aplica igual pero la calidad de datos disponible es menor).</li>
                <li>Interacciones en LinkedIn (likes/comentarios, incluyendo los que vienen de contenido "turbinado"/pagado vía Thought Leader Ads).</li>
                <li>Interacción con LinkedIn Ads por empresa (usando la función "Company Stats" de LinkedIn Ads, que muestra nivel de engagement bajo/medio/alto por empresa).</li>
              </ol>
              {!isSummary && <p className="mt-4 text-[15px] text-zinc-400">Menciona una herramienta llamada <strong>Highperformer</strong>, que combina programador de posts en LinkedIn/X con copiloto de IA, más un tracker de interacciones propias y de competidores segmentadas — solo estas dos funcionalidades (identificación de tráfico web y tracking de engagement) requieren el plan Enterprise (~$600/mes).</p>}
            </div>

            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
              <h4 className="font-semibold text-white text-lg mb-3 text-[#D5B15B]">Por qué funciona el signal-based selling (3 razones)</h4>
              <ol className="text-[15px] text-zinc-400 leading-relaxed list-decimal pl-4 space-y-2">
                {!isSummary && <li>La tasa de respuesta positiva es mucho más alta contactando prospectos "templados" (con señal previa) que en outbound frío masivo. Su ejemplo: una campaña de cold email de 7.000 envíos logró un 7,5% de respuesta (vs. el estándar de 1-3%); con signal-based selling en LinkedIn logra entre 35-50% de respuesta positiva.</li>}
                {!isSummary && <li>Conectar cuando el prospecto ya emitió una señal de intención es "conectar en sus términos" — acerca al ideal de mandar el mensaje correcto, a la persona correcta, en el momento correcto, por el canal correcto.</li>}
                {!isSummary && <li>Las señales de primera mano son más fiables y fáciles de aprovechar porque las tienes en propiedad (permiten, por ejemplo, hacer retargeting programático).</li>}
                {isSummary && <li>Mejor tasa de respuesta (35-50%), timing perfecto y propiedad de los datos de primera mano.</li>}
              </ol>
            </div>

            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
              <h4 className="font-semibold text-white text-lg mb-3">Caso real de venta por señales (CRO/CEO)</h4>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {isSummary 
                  ? "Un CEO vio un anuncio, se lo pasó a su CRO, el CRO visitó el perfil. Abordando inteligentemente sin vender, cerraron en días." 
                  : "Relata un ejemplo real: detecta que un CRO de una startup ideal visitó su perfil de LinkedIn. Le manda un mensaje simple preguntando cómo encontró su perfil (sin intentar vender nada). El CRO responde que se lo pasó Nick Black (su nuevo jefe). Al investigar, descubre que Nick Black es el CEO/fundador — deduce que el CEO le pasó uno de sus anuncios al CRO porque probablemente están evaluando algo similar a lo que él vende. Pregunta sutilmente sin asumir ni presionar directamente. Tras dos semanas de seguimiento, el CEO agenda la llamada y cierran el trato en dos días. La lección: entender la conversación interna que ocurre en la empresa del prospecto (algo que la mayoría de compradores B2B no revela explícitamente) es clave para vender más — requiere inteligencia social."}
              </p>
            </div>
            
            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors md:col-span-2">
              <h4 className="font-semibold text-white text-lg mb-3">Pros y limitaciones del signal-based selling</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <span className="text-green-400 font-medium text-[15px] flex items-center gap-2 mb-2"><CheckCircle2 size={16}/> Pros:</span>
                  <ul className="text-[15px] text-zinc-400 list-disc pl-4 space-y-2">
                    {!isSummary && <li>Obliga a construir relaciones (aunque no necesariamente a largo plazo — pueden cerrarse en días) y a desarrollar inteligencia/habilidades de venta social.</li>}
                    {!isSummary && <li>Los <strong>retargeting ads / anuncios programáticos</strong> permiten volverte "omnipresente" para un pequeño set de prospectos cualificados — para esa persona que te ve en todas partes (web, LinkedIn, Google, meta, programático) "eres Jesucristo": no va a pensar en otra agencia.</li>}
                    {!isSummary && <li>Genera ciclos de feedback más rápidos: ves en qué parte de tu funnel estás fallando (ej. alguien ve tu anuncio, visita tu perfil, empieza a seguirte, pero luego se desconecta — señal de que no estás "suficientemente encima").</li>}
                    {!isSummary && <li>Puede acelerar la creación de demanda o acortar la duración de los ciclos de venta (ejemplo: un cliente que iba a comprar en 2025 decidió activarlo antes porque vio proactividad).</li>}
                    {isSummary && <li>Construye relaciones, permite retargeting omnipresente, feedback rápido.</li>}
                  </ul>
                </div>
                <div>
                  <span className="text-red-400 font-medium text-[15px] flex items-center gap-2 mb-2"><AlertCircle size={16}/> Limitaciones:</span>
                  <ul className="text-[15px] text-zinc-400 list-disc pl-4 space-y-2">
                    {!isSummary && <li>Requiere abarcar cierta "intensidad logística" (asumir la fricción que de otra manera se llevaría el prospecto — como recogerlo del aeropuerto sin que te lo pida): múltiples fuentes de datos, limpieza, filtrado, enriquecimiento, cierta tecnicidad.</li>}
                    {!isSummary && <li>Más y mejores señales requieren más inversión en publicidad, contenido y tecnología (aunque advierte que escalar no siempre depende del presupuesto sino de mejor creativo/contenido/tecnología).</li>}
                    {!isSummary && <li>Solo tiene sentido a partir de cierto volumen de facturación (recomienda entre $5.000-10.000/mes mínimo).</li>}
                    {isSummary && <li>Intensidad logística, requiere inversión en ads y tiene sentido para un ticket mínimo.</li>}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-[1.25rem] p-6 shadow-md">
              <h4 className="font-semibold text-white text-lg mb-3">Anuncios programáticos explicados</h4>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {isSummary 
                  ? "Anuncios automatizados usando datos de comportamiento. Clave instalar píxeles ahora mismo." 
                  : "Son anuncios que se distribuyen de forma automatizada y estratégica en publishers/blogs de calidad (ej. Forbes, Yahoo Finance) usando datos de comportamiento de compra/búsqueda. El presentador muestra su propio caso: pagó $100 por aparecer en Yahoo Finance. El CPM medio en programático ronda los $3 por 1.000 impresiones — muy rentable, y con volúmenes de tráfico típicos de una empresa B2B (raramente más de 30-40k visitas/mes) puede costar solo ~$100/mes cubrir el retargeting completo."}
              </p>
              {!isSummary && (
                <p className="text-[15px] text-zinc-400 leading-relaxed mt-3">
                  Insiste en la importancia de tener píxeles instalados (Google Tag Manager como mínimo) <strong>incluso si no haces ads todavía</strong>, porque cuando decidas hacerlos necesitarás audiencias ya construidas para retargeting — sin eso, el primer intento de hacer ads en frío fallará.
                </p>
              )}
            </div>

            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
              <h4 className="font-semibold text-white text-lg mb-3">Secuencias automatizadas y la herramienta Clay</h4>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {isSummary 
                  ? "Clay permite enriquecer datos. Las secuencias solo se recomiendan a partir de un gran gasto en ads." 
                  : "Explica cómo ciertas herramientas de identificación de tráfico se integran con herramientas de envío automatizado (Heyreach para DMs de LinkedIn, Smartlead para email) para automatizar campañas a segmentos de visitantes de la web. Presenta <strong>Clay</strong> como una herramienta de flujos de trabajo para enriquecimiento de datos de prospección: permite conectar decenas de proveedores de datos (Apollo, ZoomInfo, etc.) en un mismo workflow por columnas, pagando solo al proveedor que efectivamente entrega el dato (por créditos).\n\nAclara que su propia agencia <strong>no usa secuencias automatizadas</strong> porque no tienen volumen suficiente de señales para que compense el coste de montarlas — solo recomendaría automatizar a partir de empresas que ya gastan ~$50.000/mes en LinkedIn."}
              </p>
            </div>
            
            <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors md:col-span-2">
              <h4 className="font-semibold text-white text-lg mb-3">Visitas al perfil de LinkedIn y comunidades privadas en Slack — las señales "gratis"</h4>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {isSummary 
                  ? "Cuestan $0 y son muy potentes. Buscar dónde se juntan los clientes ideales (comunidades) y usar alertas por palabras clave." 
                  : "Señala que las visitas al perfil de LinkedIn y las comunidades privadas de Slack son las señales más baratas (cuestan $0 conseguirlas) y de las más potentes: dice que la mitad de sus cierres de los últimos tres meses vinieron de ahí. Ejemplo: un ejecutivo ve un anuncio suyo, se lo reenvía a un colega dentro de la empresa, ese colega visita su perfil — él lo detecta a diario y le escribe un mensaje simple y directo, cerrando después un contrato de $15.000."}
              </p>
              {!isSummary && (
                <p className="text-[15px] text-zinc-400 leading-relaxed mt-3">
                  Sobre comunidades: recomienda buscar dónde se juntan los clientes ideales y en qué comunidades se sienten cómodos expresando sus inseguridades y problemas (menciona Pavilion en EE.UU., y en español, comunidades como la de Nova Talent y Revenue Squared). En Slack se pueden configurar notificaciones por palabra clave, lo que permite enterarse en tiempo real cuando alguien menciona un tema relevante, aportar valor genuino y capturar demanda "sin querer".
                </p>
              )}
            </div>
          </div>
        </div>
        
        {/* 7. Herramientas y Conclusiones */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">7</div> 
            Herramientas y Conclusiones
          </h3>
          
          <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md mb-8">
            <h4 className="font-semibold text-white text-lg mb-4 text-[#D5B15B]">Herramientas específicas mencionadas</h4>
            <ul className="text-[15px] text-zinc-400 leading-relaxed list-disc pl-4 space-y-2">
              <li><strong>Highperformer:</strong> programador de posts LinkedIn/X + tracker de interacciones.</li>
              <li><strong>Clay:</strong> agregación y enriquecimiento de datos de múltiples proveedores.</li>
              <li><strong>Smartlead.ai</strong> / una herramienta privada de cold email a la que tienen acceso (con mejor "warming pool", rotación de IPs, sin límite de contactos ni necesidad de calentamiento, pero restringida a contactos B2B).</li>
              <li>Un stack de 3 píxeles (uno específico para EE.UU., dos internacionales pero con peor resolución en mercados hispanos).</li>
            </ul>
          </div>

          <div className="bg-[#1A1A1E] border border-zinc-800 rounded-[1.25rem] p-6 shadow-md mb-8">
            <h4 className="font-semibold text-white text-lg mb-3">Conclusiones finales: cómo aplicar esto como oferta de servicio</h4>
            <p className="text-[15px] text-zinc-400 leading-relaxed mb-4">
              {isSummary 
                ? "Puede servir como oferta de introducción y como mecanismo de retención." 
                : "El presentador argumenta que montar toda esta \"máquina\" de señales sirve como:"}
            </p>
            {!isSummary && (
              <ol className="text-[15px] text-zinc-400 leading-relaxed list-decimal pl-4 space-y-2 mb-4">
                <li><strong>Oferta de introducción</strong> de bajo coste y alto valor percibido (ej. vender la tabla de Clay montada por $50 a una empresa que ya gasta $5.000/mes en Google Ads genera un ROI evidente).</li>
                <li><strong>Mecanismo de retención:</strong> acorta ciclos de venta y propicia conversaciones comerciales.</li>
              </ol>
            )}
            {!isSummary && (
              <p className="text-[15px] text-zinc-400 leading-relaxed mt-4">
                Detalla el stack completo que ellos venden: Highperformer (Enterprise), identificación de tráfico web ilimitada a nivel empresa, identificación a nivel persona (solo EE.UU.), plataforma de anuncios programáticos, todo agregado en una tabla de Clay (~58-60 columnas) que se exporta a un Google Sheet entregado al SDR/vendedor.
              </p>
            )}
          </div>

          <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md mb-8">
            <h4 className="font-semibold text-white text-lg mb-4 text-[#D5B15B]">Sección de Q&A (preguntas del público)</h4>
            <ol className="text-[15px] text-zinc-400 leading-relaxed list-decimal pl-4 space-y-4">
              <li><strong>Sobre precio:</strong> se está evaluando ofrecer el paquete completo por $300-500/mes para los asistentes de la aceleradora, con precio a definir según volumen de cuentas.</li>
              <li><strong>¿Es necesario tener trabajo previo en LinkedIn para que el servicio tenga sentido?</strong> Depende de dónde estén los clientes. Si el cliente ideal no usa LinkedIn, el servicio no encaja, porque dos de las cuatro fuentes de señales dependen de LinkedIn (orgánico y ads).</li>
              <li><strong>Sobre infoproductores</strong> (pregunta de una agencia de branding/diseño): el presentador es tajante — el modelo de allbound/signal-based selling <strong>no sirve para infoproductores</strong>, porque estos operan con tecnología de consumidor (Instagram, no LinkedIn), no están en ecosistemas B2B enriquecibles con Clay ni proveedores de datos B2B, y están protegidos por regulaciones de datos de consumidor. Sugiere en cambio que si trabajan como partners de agencias que sí atienden infoproductores, la mejor estrategia de crecimiento sería asociarse con la agencia que más infoproductores maneje, para capturarlos todos a través de ese partnership.</li>
            </ol>
          </div>

          <div className="bg-[#1A1A1E] border border-zinc-800 rounded-[1.25rem] p-6 shadow-md">
            <h4 className="font-semibold text-white text-lg mb-3 flex items-center gap-2">Reflexión final sobre "qué vendes determina a quién vendes"</h4>
            <p className="text-[15px] text-zinc-400 leading-relaxed mb-4">
              {isSummary 
                ? "El tipo de servicio determina el cliente. Se distingue entre servicios de ejecución y consultoría." 
                : "En la discusión final con otros ponentes, se plantea que el tipo de producto/servicio que vendes determina más el tipo de cliente al que puedes vender, que al revés. Se distingue entre servicios de <strong>ejecución</strong> (donde ya existe demanda creada por otros, y solo hay que demostrar competencia para ejecutar un playbook ya validado) y servicios de <strong>pensamiento estratégico/consultoría</strong> (que requieren mucha más autoridad y track record, y no se pueden vender con una estrategia tipo ClickFunnels)."}
            </p>
            {!isSummary && (
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                Propone un camino de carrera en 7 años: 2 años como generalista/ejecutor en una startup, 3-5 años especializándose y montando una agencia de ejecución de un playbook que otros ya "evangelizaron" (creando demanda solo para un ángulo específico dentro de ese playbook — en su caso, el ángulo de vídeo), y finalmente 2 años transicionando a consultor estratégico que cobra por insights, gracias al track record acumulado. Usa como ejemplo el caso real de <strong>Chris Walker</strong> (fundador de Refine Labs, escalada a $15-20M/año en 5 años, y ahora fundador de Passetto, una consultora de estrategia GTM que analiza datos financieros y de CRM de más de 52 empresas de software B2B).
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
