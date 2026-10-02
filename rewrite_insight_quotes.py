import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

start_marker = "const LinkedInInsightSummaryPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {"
end_marker = "const LinkedInVistasPage ="

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    new_component = """const LinkedInInsightSummaryPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {
  const [isSummary, setIsSummary] = useState(false);

  return (
    <div className="max-w-4xl mx-auto w-full pb-20 animate-in fade-in duration-300">
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
          <ArcadiaLogo />
          <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('1')}>Arcadia</span>
          <span className="text-zinc-700">/</span>
          <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_insight_parent')}>LinkedIn Insight</span>
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
      
      <div className="flex items-start gap-5 mb-10">
        <div className="border border-[#D5B15B]/30 p-3.5 rounded-2xl text-[#D5B15B] bg-[#1A1A1E] mt-1 shadow-[0_0_20px_rgba(213,177,91,0.15)]">
          <PlayCircle size={28} strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white tracking-tight mb-3">Dominar el Scroll</h1>
          <p className="text-[17px] text-zinc-400 leading-relaxed max-w-2xl">
            Resumen completo del video, organizado por los ejes principales que desarrolla.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <section className="bg-[#121214] border border-zinc-800/80 rounded-[1.5rem] p-8 relative overflow-hidden group hover:border-[#D5B15B]/30 transition-colors">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D5B15B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
            <Target className="text-[#D5B15B]" size={22} />
            La promesa central
          </h3>
          <div className="space-y-4 relative z-10 text-[15px] text-zinc-300 leading-relaxed">
            <p>
              {isSummary ? `Duplicar citas en 90 días y reducir CAC a la mitad dominando el scroll.` : `El presentador ofrece duplicar el volumen de citas/appointments de un negocio en 90 días y, al mismo tiempo, reducir a la mitad el costo de adquisición de clientes. La condición es un solo objetivo: "dominar el scroll" (own the scroll), bajo una modalidad de "no pagás si no funciona".`}
            </p>
            {!isSummary && (
              <p>
                Aclara que esto es solo para negocios que ya facturan en serio: que ya tengan un proceso de ventas probado, que ya inviertan en marketing y publicidad, y que tengan capacidad para absorber 10 o más clientes nuevos por mes. Si no cumplís esos requisitos, dice explícitamente que su servicio no es para vos todavía.
              </p>
            )}
            {isSummary && (
               <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-4">
                  <p className="font-semibold text-white text-sm mb-1">Requisitos:</p>
                  <p className="text-zinc-400 text-sm">Proceso de ventas probado, inversión en Ads, capacidad para 10+ clientes/mes.</p>
               </div>
            )}
          </div>
        </section>

        <section className={`grid ${isSummary ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-6`}>
          <div className="bg-[#121214] border border-zinc-800/80 rounded-[1.5rem] p-8 group hover:border-[#D5B15B]/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <BarChart className="text-[#D5B15B]" size={22} />
              Las dos únicas métricas que importan
            </h3>
            <p className="text-[15px] text-zinc-300 mb-6">
              {isSummary ? `Solo hay dos números relevantes en cualquier negocio:` : `Según el presentador, en cualquier negocio solo hay dos números relevantes:`}
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1A1A1E] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0 mt-0.5">1</div>
                <p className="text-[15px] text-zinc-300">El costo de adquirir un cliente.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1A1A1E] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0 mt-0.5">2</div>
                <p className="text-[15px] text-zinc-300">El valor de ese cliente a lo largo del tiempo (lifetime value).</p>
              </div>
            </div>
            <p className="text-[15px] text-zinc-300">
              {isSummary ? `El CEO debe maximizar LTV y minimizar CAC. La clave para ambas: la confianza del lead antes de la llamada.` : `El trabajo del CEO es maximizar el segundo número y minimizar el primero. Y sostiene que hay una sola variable que impacta ambas métricas simultáneamente: el nivel de confianza que un lead tiene en la marca antes de llegar a una llamada de ventas.`}
            </p>
          </div>

          <div className="bg-[#121214] border border-zinc-800/80 rounded-[1.5rem] p-8 group hover:border-[#D5B15B]/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="text-[#D5B15B]" size={22} />
              El dato que respalda la teoría
            </h3>
            <div className="flex flex-col h-full justify-center pb-6">
              <div className="text-6xl font-bold text-white mb-4">26x</div>
              <p className="text-[15px] text-zinc-300 leading-relaxed">
                {isSummary 
                  ? `El efectivo cobrado por cita fue 26x mayor cuando el prospecto ya conocía la marca (tras analizar 462 llamadas).` 
                  : `Analizaron 462 llamadas de ventas propias y encontraron que el efectivo cobrado por cita agendada era 26 veces mayor cuando el prospecto ya conocía la marca, comparado con un lead de la misma calidad, mismo calendario, mismo producto, pero que no tenía familiaridad ni confianza previa.`}
              </p>
              {!isSummary && (
                <p className="text-[15px] text-zinc-300 leading-relaxed mt-4">
                  Esto lo lleva a concluir que no hay otra palanca en un negocio que multiplique tanto el ingreso con los mismos leads.
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="bg-[#121214] border border-zinc-800/80 rounded-[1.5rem] p-8 group hover:border-[#D5B15B]/30 transition-colors">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <Clock className="text-[#D5B15B]" size={22} />
            Por qué esto funciona ahora (y no antes)
          </h3>
          {!isSummary && <p className="text-[15px] text-zinc-300 mb-6">El presentador da tres razones:</p>}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1A1A1E] rounded-2xl p-6 border border-zinc-800">
              <div className="flex items-center gap-3 mb-3">
                 <div className="w-8 h-8 rounded-full bg-[#121214] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0">1</div>
                 <h4 className="font-bold text-white">Los algoritmos cambiaron radicalmente</h4>
              </div>
              <p className="text-[14.5px] text-zinc-400 leading-relaxed">
                {isSummary ? `El 'tribal model' de Meta 'lee la mente' sugiriendo contenido exacto a la persona exacta.` : `menciona un modelo de Meta ("tribal model") entrenado con miles de escaneos cerebrales para entender cómo el cerebro procesa estímulos, lo que permite sugerir el contenido exacto a la persona exacta. Según él, esto hace que las plataformas "lean la mente" del usuario.`}
              </p>
            </div>
            
            <div className="bg-[#1A1A1E] rounded-2xl p-6 border border-zinc-800">
              <div className="flex items-center gap-3 mb-3">
                 <div className="w-8 h-8 rounded-full bg-[#121214] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0">2</div>
                 <h4 className="font-bold text-white">El consumo de contenido es masivo</h4>
              </div>
              <p className="text-[14.5px] text-zinc-400 leading-relaxed">
                {isSummary ? `Más del 60% de las 6hs diarias online se dedican a hacer scroll.` : `más del 60% de las 6 horas diarias que la gente pasa online se dedica a hacer scroll.`}
              </p>
            </div>
            
            <div className="bg-[#1A1A1E] rounded-2xl p-6 border border-zinc-800">
              <div className="flex items-center gap-3 mb-3">
                 <div className="w-8 h-8 rounded-full bg-[#121214] border border-[#D5B15B]/50 text-[#D5B15B] flex items-center justify-center text-sm font-bold shrink-0">3</div>
                 <h4 className="font-bold text-[#D5B15B]">Cambió la lógica del contenido</h4>
              </div>
              <p className="text-[14.5px] text-zinc-400 leading-relaxed">
                {isSummary ? `Tenés 1.7 seg. para captar atención. No se busca viralidad en 1 video, sino 'inundar el scroll' para exposición repetida.` : `ya no importa un solo video espectacular, porque hoy solo tenés 1.7 segundos para captar la atención. Por eso la estrategia ganadora es "inundar el scroll" (flood the scroll): no busca que cada pieza se vuelva viral, sino que el prospecto ideal te encuentre cada vez que hace scroll. Esto genera confianza por mera exposición repetida, sin que la persona lo decida conscientemente.`}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#121214] border border-zinc-800/80 rounded-[1.5rem] p-8 group hover:border-[#D5B15B]/30 transition-colors">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <Globe className="text-[#D5B15B]" size={22} />
            Ejemplos de "arbitraje" en distintas industrias
          </h3>
          <p className="text-[15px] text-zinc-300 mb-6">
            {isSummary ? `Negocios chicos logrando alcances enormes:` : `Da varios casos de negocios chicos con pocos seguidores que logran alcances enormes:`}
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
               <div className="w-1.5 h-1.5 rounded-full bg-[#D5B15B] shrink-0"></div>
               <p className="text-[14.5px] text-zinc-300">Una empresa de techos (roofing) con menos de 1.000 seguidores: un reel con 150.000 vistas.</p>
            </div>
            <div className="flex items-center gap-3 bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
               <div className="w-1.5 h-1.5 rounded-full bg-[#D5B15B] shrink-0"></div>
               <p className="text-[14.5px] text-zinc-300">Una constructora con 4.000 seguidores: 60.000 vistas.</p>
            </div>
            <div className="flex items-center gap-3 bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
               <div className="w-1.5 h-1.5 rounded-full bg-[#D5B15B] shrink-0"></div>
               <p className="text-[14.5px] text-zinc-300">Una agencia con 11.000 seguidores: 6 millones de vistas.</p>
            </div>
            <div className="flex items-center gap-3 bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
               <div className="w-1.5 h-1.5 rounded-full bg-[#D5B15B] shrink-0"></div>
               <p className="text-[14.5px] text-zinc-300">Estudios jurídicos y consultorios odontológicos con miles de vistas partiendo de pocos seguidores.</p>
            </div>
          </div>
          
          <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6">
             <h4 className="font-bold text-white mb-3">Caso: Empresa de renovaciones/remodelaciones</h4>
             <p className="text-[15px] text-zinc-300 leading-relaxed">
               {isSummary 
                  ? `Cuenta "faceless" generada con IA. 60k seguidores en 6 meses con videos de millones de vistas. El algoritmo dirigió leads a la zona correcta (Canadá).` 
                  : `El caso más desarrollado es el de una empresa de renovaciones/remodelaciones: en vez de invertir en publicidad paga, crearon una cuenta de Instagram con videos "faceless" (sin mostrar la cara) generados con IA, mostrando las renovaciones. En 6 meses llegaron a casi 60.000 seguidores, con videos de 1, 4 y hasta 6 millones de vistas sin gastar en ads. En los comentarios, gente de otras zonas (Ontario, Edmonton) preguntaba si podían hacer el trabajo en su área, y destaca que el algoritmo igual dirigía el contenido viral hacia leads de calidad en la zona correcta (Canadá).`}
             </p>
          </div>
        </section>

        <section className="bg-[#121214] border border-zinc-800/80 rounded-[1.5rem] p-8 group hover:border-[#D5B15B]/30 transition-colors">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <ShieldAlert className="text-[#D5B15B]" size={22} />
              El problema que identifica en la industria
            </h3>
            <p className="text-[15px] text-zinc-300 leading-relaxed mb-6">
              {isSummary ? `Referentes como Hormozi o GaryVee no venden algo único, sino que poseen la atención y publican a diario.` : `Menciona referentes como Alex Hormozi, Ryan Serhant, Codie Sanchez, Gary Vaynerchuk y Patrick Bet-David como ejemplos de personas que no venden algo único (coaching, real estate, agencias), sino que su ventaja real es que "poseen la atención" y tratan el contenido como su activo más valioso, publicando todos los días.`}
            </p>
            <p className="text-[15px] text-zinc-300 mb-4">
              {isSummary ? `Los 2 caminos tradicionales son insostenibles:` : `Plantea que hasta ahora un negocio solo tenía dos caminos para lograr esto:`}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1A1A1E] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0 mt-0.5">1</div>
                <p className="text-[14.5px] text-zinc-300">Armar un departamento de contenido interno, gastando un cuarto de millón de dólares o más por mes (como hace Hormozi), con editores, camarógrafos, etc.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1A1A1E] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0 mt-0.5">2</div>
                <p className="text-[14.5px] text-zinc-300">Que el dueño del negocio se convierta en creador de contenido de tiempo completo, algo que la mayoría rechaza.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#121214] border border-zinc-800/80 rounded-[1.5rem] p-8 group hover:border-[#D5B15B]/30 transition-colors">
           <h3 className="text-xl font-bold text-[#D5B15B] mb-6 flex items-center gap-3">
              <Lightbulb className="text-[#D5B15B]" size={22} />
              La solución que propone (su servicio)
            </h3>
            <p className="text-[15px] text-zinc-300 mb-6">Dice haber resuelto ese dilema con IA, en dos fases:</p>
            
            <div className="space-y-6">
               <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Fase 1 – Investigación:</h4>
                  <p className="text-[15px] text-zinc-400 leading-relaxed">
                     {isSummary ? `Agentes de IA analizan qué ganchos/formatos funcionan y dónde pierde clientes el negocio.` : `Usan "agentes de IA" para analizar qué contenido, ganchos (hooks) y formatos ya están funcionando en el nicho del cliente, qué mensajes generan confianza en los competidores, y cómo esos competidores convierten atención en ingresos reales. También detectan en qué punto el negocio del cliente está "perdiendo" clientes o dinero.`}
                  </p>
               </div>
               
               <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Fase 2 – Motor de conversión:</h4>
                  <p className="text-[15px] text-zinc-400 leading-relaxed">
                     {isSummary ? `Construyen un sistema con cientos de activos de confianza y agentes IA que califican y nutren leads.` : `Antes de lanzar contenido, construyen un sistema (separado del esfuerzo manual del cliente) que convierta esa atención en dinero: cientos de activos de "confianza y venta", más agentes de IA que califican, nutren y hacen seguimiento de cada lead sin dejar ninguno sin atender.`}
                  </p>
               </div>
               
               <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Fase 3 – Inundar el scroll:</h4>
                  <p className="text-[15px] text-zinc-400 leading-relaxed mb-3">Una vez armada la infraestructura, ofrecen dos caminos:</p>
                  <ul className="space-y-3 mb-4">
                     <li className="flex items-start gap-3 bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D5B15B] shrink-0 mt-1.5"></div>
                        <p className="text-[14.5px] text-zinc-300">Construir una marca personal (usando la voz y el punto de vista del cliente, pero a una escala que ningún equipo humano podría sostener).</p>
                     </li>
                     <li className="flex items-start gap-3 bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D5B15B] shrink-0 mt-1.5"></div>
                        <p className="text-[14.5px] text-zinc-300">Un motor de contenido 100% "faceless" generado con IA, sin que el cliente aparezca en cámara.</p>
                     </li>
                  </ul>
                  <p className="text-[15px] text-zinc-400">
                     Ambos caminos apuntan a estar presente en Instagram, TikTok, YouTube y X.
                  </p>
               </div>
            </div>
        </section>

        <section className={`grid ${isSummary ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-6`}>
          <div className="bg-[#121214] border border-zinc-800/80 rounded-[1.5rem] p-8 group hover:border-[#D5B15B]/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Key className="text-[#D5B15B]" size={22} />
              Diferenciador que resalta
            </h3>
            <p className="text-[15px] text-zinc-300 leading-relaxed">
              {isSummary ? `"Lo construyen y el cliente lo posee", sin dependencias ni retainers.` : `Afirma que "lo construyen y el cliente lo posee" (no hay retainers ni dependencia eterna de una agencia), y que el objetivo es eliminar la dependencia de proveedores de servicios o canales publicitarios que "se comen el margen".`}
            </p>
          </div>

          <div className="bg-[#121214] border border-zinc-800/80 rounded-[1.5rem] p-8 group hover:border-[#D5B15B]/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <ListOrdered className="text-[#D5B15B]" size={22} />
              Proceso de aplicación
            </h3>
            <ul className="space-y-4 mb-6">
               <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1A1A1E] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0 mt-0.5">1</div>
                  <p className="text-[14.5px] text-zinc-300">{isSummary ? `Aplicación con info básica.` : `El interesado aplica compartiendo información sobre su público, precios, mercado y principales competidores.`}</p>
               </li>
               <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1A1A1E] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0 mt-0.5">2</div>
                  <p className="text-[14.5px] text-zinc-300">{isSummary ? `Investigación con IA.` : `Lanzan los "agentes de IA" para investigar cómo el "1%" de ese nicho está ganando, y arman una propuesta/roadmap.`}</p>
               </li>
               <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1A1A1E] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0 mt-0.5">3</div>
                  <p className="text-[14.5px] text-zinc-300">En la llamada, presentan ese plan en vivo.</p>
               </li>
               <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1A1A1E] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0 mt-0.5">4</div>
                  <p className="text-[14.5px] text-zinc-300">Si el cliente está de acuerdo, arrancan a implementar el sistema ahí mismo.</p>
               </li>
               <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1A1A1E] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0 mt-0.5">5</div>
                  <p className="text-[14.5px] text-zinc-300">{isSummary ? `Si no hay oportunidad, ofrecen plan gratuito.` : `Si no encuentran una oportunidad real para ese negocio, se lo comunican honestamente y ofrecen, en cambio, un plan que el propio negocio pueda implementar por su cuenta.`}</p>
               </li>
            </ul>
            {!isSummary && (
               <p className="text-[14.5px] text-zinc-400">
                  Cierra invitando a aplicar mediante un link, prometiendo compartir todo lo que descubran sobre el negocio del espectador en la llamada.
               </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}\n\n"""

    content = content[:start_idx] + new_component + content[end_idx:]
    
    with open('src/App.tsx', 'w') as f:
        f.write(content)
else:
    print("Failed to find boundaries")

