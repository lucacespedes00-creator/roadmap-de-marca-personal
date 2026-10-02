import React, { useState } from 'react';
import { Target, Zap, Users, Shield, PlayCircle, BarChart, FileText, CheckCircle2, AlertCircle, Eye, RefreshCcw, TrendingUp } from 'lucide-react';

const ArcadiaLogo = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15.41 3.53H19.78L12.35 18.06H7.98L15.41 3.53Z" />
    <path d="M6.02 12.37H10.39L8.21 16.65H3.84L6.02 12.37Z" />
  </svg>
);

export const MarketingAsimilacionPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {
  const [isSummary, setIsSummary] = useState(false);

  return (
    <div className="max-w-4xl mx-auto w-full pb-20 animate-in fade-in duration-300">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
          <ArcadiaLogo />
          <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_parent')}>Arcadia</span>
          <span className="text-zinc-700">/</span>
          <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('marketing_parent')}>Marketing</span>
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
      
      <div className="flex items-start gap-5 mb-12">
        <div className="border border-[#D5B15B]/30 p-3.5 rounded-2xl text-[#D5B15B] bg-[#1A1A1E] mt-1 shadow-[0_0_20px_rgba(213,177,91,0.15)]">
          <Target size={28} strokeWidth={1.5} />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">Estrategia de "Marketing de Asimilación"</h2>
          <p className="text-zinc-400 text-[16px] leading-relaxed max-w-2xl">
            {isSummary 
              ? "Resumen de la estrategia de marketing utilizada para posicionamiento mediante el análisis de otras figuras del sector."
              : "El video es una confesión/explicación de una estrategia de marketing que el protagonista usó para posicionarse, hablando públicamente de otras figuras del rubro (Rasetti, Agustín Nievas, Ramiro Cubría, Charlie Morgan, entre otros)."}
          </p>
        </div>
      </div>

      {/* Video Embed */}
      <div className="w-full aspect-video rounded-3xl overflow-hidden border border-zinc-800/80 shadow-2xl mb-10 bg-[#121214]">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/oMb3AC4Qvmo" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      <div className="space-y-12">
        {/* 1. La percepción pública vs. la realidad */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden group hover:border-[#3F3F46] transition-colors">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D5B15B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
            <Eye className="text-[#D5B15B]" size={24} />
            La percepción pública vs. la realidad
          </h3>
          
          <div className="text-[16px] text-zinc-300 leading-relaxed relative z-10">
            <p>
              {isSummary
                ? "La gente creía que la estrategia era hablar mal de otros, pero la realidad era la inversa. Nunca se reveló públicamente porque quienes intentaron copiarla fracasaron por no entender el mecanismo."
                : <>Todo el mundo asumió que su estrategia fue <strong>agresiva</strong>: que tuvo que "hablar mal" de otros para posicionarse él. Según él, esa percepción era exactamente lo que buscaba generar, pero la estrategia real era <strong>la inversa</strong>. Nunca reveló esto públicamente porque muchos intentaron copiarlo y fracasaron, ya que no entendían el mecanismo real detrás.</>}
            </p>
          </div>
        </section>

        {/* 2. El mecanismo: "Marketing de asimilación" */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden group hover:border-[#3F3F46] transition-colors">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
            <RefreshCcw className="text-[#D5B15B]" size={24} />
            El mecanismo: "Marketing de asimilación"
          </h3>
          
          <p className="text-[16px] text-zinc-400 mb-8 leading-relaxed">
            {isSummary 
              ? "La estructura de los videos utilizaba un gancho inicial, un mensaje encubierto en el medio, y un efecto de comparación automática."
              : "La estructura de sus videos funcionaba así:"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#27272A] flex items-center justify-center text-white font-bold text-sm">1</div>
                <h4 className="font-bold text-white text-lg">El gancho (hook)</h4>
              </div>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {isSummary
                  ? "Promesa de analizar a un conocido para captar atención."
                  : <>Atraía a la audiencia prometiendo "desarmar", "exponer" o analizar a alguien conocido del rubro. Esto generaba atención inmediata.</>}
              </p>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-6 shadow-md border-l-2 border-l-[#D5B15B]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#27272A] flex items-center justify-center text-[#D5B15B] font-bold text-sm">2</div>
                <h4 className="font-bold text-white text-lg">El punto medio (la clave oculta)</h4>
              </div>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {isSummary
                  ? "Inserción breve de su propia especialidad en medio del video: 'esto que desarmando, yo lo hago mejor'."
                  : <>A la mitad del video —ni al principio ni al final, momento en que la audiencia ya tiene más confianza y "conciencia" alta porque siente que todo está fundamentado— él insertaba brevemente a qué se dedicaba él y en qué se especializaba. Nunca lo explicaba en detalle, solo decía algo como "esto que estoy desarmando, yo lo hago mejor".</>}
              </p>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#27272A] flex items-center justify-center text-white font-bold text-sm">3</div>
                <h4 className="font-bold text-white text-lg">El efecto Coca-Cola</h4>
              </div>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {isSummary
                  ? "Generar comparaciones mentales automáticas sin explicaciones largas."
                  : <>Usa la metáfora de crear una "Black Cola": en vez de explicar ingredientes (azúcar, glucosa, gas, electrolitos), simplemente dice "es como la Coca-Cola pero más dulce y menos dañina". El cerebro automáticamente hace una comparación mental sin necesidad de explicación extensa, en solo 3 segundos.</>}
              </p>
            </div>

            <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#27272A] flex items-center justify-center text-white font-bold text-sm">4</div>
                <h4 className="font-bold text-white text-lg">Por qué nadie lo notó</h4>
              </div>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {isSummary
                  ? "El mensaje pasaba desapercibido por ser breve y estar camuflado por el análisis principal."
                  : <>Como esta "auto-promoción comparativa" estaba escondida en la mitad del video y era muy breve, la mayoría de la gente se quedaba con la parte de "atención" (el desarme del otro) y no registraba conscientemente el mensaje de comparación. Por eso la estrategia quedó encubierta y nadie logró replicarla con éxito.</>}
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-5 bg-[#D5B15B]/5 border border-[#D5B15B]/20 rounded-xl">
            <p className="text-[15px] text-zinc-300 italic">
              {isSummary
                ? "Técnica similar a la usada por grandes marcas de gaseosas, que seguirá funcionando bien ejecutada."
                : <>Él la resume como una técnica que también usan marcas como <strong>Pepsi y Coca-Cola</strong> (comparaciones visuales/publicitarias directas o indirectas entre productos), y cree que seguirá funcionando al menos un año más si se sabe utilizar bien.</>}
            </p>
          </div>
        </section>

        {/* 3. El resultado: marketing de percepción */}
        <section className="bg-gradient-to-br from-[#121214] to-[#1A1A1E] border border-zinc-800/80 rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden group hover:border-[#D5B15B]/30 transition-colors">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
            <TrendingUp className="text-[#D5B15B]" size={24} />
            El resultado: marketing de percepción
          </h3>
          
          <div className="text-[16px] text-zinc-300 leading-relaxed relative z-10">
            <p>
              {isSummary
                ? "Se logró una percepción de superioridad y la gente compraba sin tener claro el motivo exacto, solo por percibirlo como mejor."
                : <>Gracias a repetir el patrón "esto, pero mucho mejor" una y otra vez, logró que la gente le pagara <strong>sin saber exactamente por qué</strong> le pagaba. La percepción generada fue que él era superior a nivel profesional, personal, ético y de servicio, aunque nunca explicó en detalle en qué consistía esa superioridad.</>}
            </p>
          </div>
        </section>

        {/* 4. La segunda pata: capacidad de predicción de patrones */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden group hover:border-[#3F3F46] transition-colors">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
            <BarChart className="text-[#D5B15B]" size={24} />
            La segunda pata: capacidad de predicción de patrones
          </h3>
          
          <p className="text-[16px] text-zinc-300 leading-relaxed mb-6">
            {isSummary
              ? "Habilidad para predecir trayectorias basándose en el análisis de patrones. El caso de Agustín Nievas ejemplifica esto:"
              : <>Afirma que su habilidad para "desarmar" a otros viene de un sistema mental de detección de patrones de comportamiento. Pone como ejemplo el caso de <strong>Agustín Nievas</strong>:</>}
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex gap-3">
              <div className="mt-1 text-[#D5B15B]"><CheckCircle2 size={18} /></div>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {isSummary ? "Predicción del fracaso del proyecto tras analizar meses de comportamiento." : "Analizando sus últimos meses de comportamiento, predijo que su proyecto se iba a \"quemar\"."}
              </p>
            </li>
            <li className="flex gap-3">
              <div className="mt-1 text-[#D5B15B]"><CheckCircle2 size={18} /></div>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {isSummary ? "Fallo al pivotar de B2C a B2B sin una audiencia específica." : <>Explica que Nievas construyó su audiencia inicial en un modelo <strong>B2C</strong>, pero luego quiso pivotar a <strong>B2B</strong> sin crear una audiencia nueva específica para ese mercado.</>}
              </p>
            </li>
            <li className="flex gap-3">
              <div className="mt-1 text-[#D5B15B]"><CheckCircle2 size={18} /></div>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {isSummary ? "El nuevo programa mezcló audiencias, debilitando la confianza en el producto." : "Al lanzar el nuevo programa, entró gente de su vieja audiencia B2C junto con algunos B2B que confiaban en él como referente, pero el producto/enfoque no sostenía esa confianza."}
              </p>
            </li>
            <li className="flex gap-3">
              <div className="mt-1 text-[#D5B15B]"><CheckCircle2 size={18} /></div>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {isSummary ? "Predicción acertada de un producto fallido y retorno al modelo inicial por falta de audiencia." : <>Predijo (en un video de julio de 2024) que Nievas terminaría sacando un producto tipo "Robin Masterman", que este fracasaría, y que en enero de 2025 volvería a un modelo B2C que también fracasaría por falta de audiencia nueva.</>}
              </p>
            </li>
            <li className="flex gap-3">
              <div className="mt-1 text-[#D5B15B]"><CheckCircle2 size={18} /></div>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {isSummary ? "El cumplimiento exacto de las predicciones le dio mayor autoridad y credibilidad." : "Según él, todo esto se cumplió exactamente, lo cual le dio mayor autoridad y credibilidad."}
              </p>
            </li>
          </ul>

          <div className="p-6 bg-[#1A1A1E] rounded-xl border border-zinc-800">
            <p className="text-[15px] text-zinc-300 leading-relaxed">
              {isSummary
                ? "Analizar comportamientos repetitivos y predecir resultados alivia la incertidumbre humana, algo altamente valorado."
                : <>Explica que la clave de su método de "desarme" es analizar los últimos 4-6 meses o un año de comportamiento de una marca personal, detectar los patrones repetitivos, y proyectar hacia dónde se dirige esa persona si sigue igual o si cambia. Según él, esto conecta con una necesidad humana profunda: la <strong>incertidumbre</strong>. La gente paga por tener respuestas o predicciones (lo compara con el tarot), y esa incomodidad ante lo incierto es más tolerada por empresarios/emprendedores que por el público general.</>}
            </p>
          </div>
        </section>

        {/* 5. Cierre: versión "blindada" a futuro */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden group hover:border-[#3F3F46] transition-colors">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
            <Shield className="text-[#D5B15B]" size={24} />
            Cierre: versión "blindada" a futuro
          </h3>
          
          <div className="text-[16px] text-zinc-300 leading-relaxed relative z-10">
            <p>
              {isSummary
                ? "Planea repetir la estrategia de una manera más ética y segura legalmente."
                : <>Al final menciona que piensa repetir la estrategia, pero de una forma <strong>más ética y "blindada"</strong> legalmente, de manera que —aunque siga nombrando y hablando de otras personas— sea imposible que le bajen los videos por la forma en que elige decir las cosas.</>}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
