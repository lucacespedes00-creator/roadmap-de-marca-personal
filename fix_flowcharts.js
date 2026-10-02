import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

// We will replace the three sections with properly aligned flowcharts.

const replacement1 = `        {/* Common MDR Models */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden mt-8">
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

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch justify-center relative">
            {/* Flowchart */}
            <div className="flex flex-col items-center w-full lg:w-64 shrink-0 relative z-10">
              <FlowStep title="Anuncio" />
              <FlowArrow />
              <div className="relative w-full flex justify-center">
                <FlowStep title="Página de Registro" />
                <div className="hidden lg:flex absolute top-1/2 left-full w-[4rem] items-center -translate-y-1/2">
                  <div className="w-full border-t-2 border-dashed border-zinc-600/50"></div>
                  <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-zinc-600/50 absolute right-0"></div>
                </div>
              </div>
              <FlowArrow />
              <FlowStep title="VSL" />
              <FlowArrow />
              <div className="relative w-full flex justify-center">
                <FlowStep title="Aplicación" />
                <div className="hidden lg:flex absolute top-1/2 left-full w-[4rem] items-center -translate-y-1/2">
                  <div className="w-full border-t-2 border-dashed border-zinc-600/50"></div>
                  <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-zinc-600/50 absolute right-0"></div>
                </div>
              </div>
              <FlowArrow />
              <FlowStep title="Página de Reservas" />
              <FlowArrow />
              <FlowStep title="Página de Gracias" />
              <FlowArrow />
              <div className="relative w-full flex justify-center">
                <FlowStep title="Llamada de Ventas" final />
                <div className="hidden lg:block absolute top-1/2 left-[calc(100%+4rem)] w-4 h-4 -translate-y-1/2 pointer-events-none" id="sales-call-target-1"></div>
              </div>
            </div>

            {/* Setter Outreach */}
            <div className="w-full lg:w-[400px] bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-2xl p-6 lg:p-8 relative mt-12 lg:mt-[76px] z-10 flex flex-col h-fit">
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
              
              {/* Arrow from Setter Outreach bottom to Sales Call */}
              <div className="hidden lg:block absolute -bottom-6 left-1/2 w-[calc(50%+4rem+128px)] h-[calc(100%+120px)] border-l-2 border-b-2 border-zinc-500/50 rounded-bl-xl pointer-events-none -translate-x-full z-0" style={{ top: 'auto', bottom: '-40px' }}>
                {/* We just draw an SVG to be precise */}
              </div>
            </div>
            
            {/* Custom SVG line for Setter Outreach -> Sales Call */}
            <svg className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none z-0" style={{ minHeight: '600px' }}>
              {/* This draws a line from the bottom-center of the Setter box to the left, then down to Sales Call */}
              <path d="M 470 510 L 470 540 L 320 540 L 320 515" fill="none" stroke="rgba(113, 113, 122, 0.5)" strokeWidth="2" />
              <polygon points="316,515 324,515 320,505" fill="rgba(113, 113, 122, 0.5)" />
            </svg>
          </div>
        </section>`;

const replacement2 = `        {/* Low Ticket Funnel */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden mt-8">
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Funnel Low Ticket + Setter Outbound
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch justify-center relative">
            {/* Flowchart */}
            <div className="flex flex-col items-center w-full lg:w-64 shrink-0 relative z-10">
              <FlowStep title="Anuncio" />
              <FlowArrow />
              <FlowStep title="Oferta low-ticket" />
              <FlowArrow />
              <div className="relative w-full flex justify-center">
                <FlowStep title="Checkout + bumps" />
                <div className="hidden lg:flex absolute top-1/2 left-full w-[4rem] items-center -translate-y-1/2">
                  <div className="w-full border-t-2 border-dashed border-zinc-600/50"></div>
                  <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-zinc-600/50 absolute right-0"></div>
                </div>
              </div>
              <FlowArrow />
              <FlowStep title="OTO 1 (upsell)" />
              <FlowArrow />
              <FlowStep title="OTO 2 (upsell)" />
              <FlowArrow />
              <div className="relative w-full flex justify-center">
                <FlowStep title="Nuevo comprador" />
                <div className="hidden lg:flex absolute top-1/2 left-full w-[4rem] items-center -translate-y-1/2">
                  <div className="w-full border-t-2 border-dashed border-zinc-600/50"></div>
                  <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-zinc-600/50 absolute right-0"></div>
                </div>
              </div>
              <FlowArrow />
              <FlowStep title="Llamada de Ventas" final />
            </div>

            {/* Setter Outreach */}
            <div className="w-full lg:w-[400px] bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-2xl p-6 lg:p-8 relative mt-12 lg:mt-[150px] z-10 flex flex-col h-fit">
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
            
            {/* Custom SVG line for Setter Outreach -> Sales Call */}
            <svg className="hidden lg:block absolute top-0 left-0 w-full h-full pointer-events-none z-0" style={{ minHeight: '700px' }}>
              <path d="M 470 700 L 470 730 L 320 730 L 320 515" fill="none" stroke="rgba(113, 113, 122, 0.5)" strokeWidth="2" />
              <polygon points="316,515 324,515 320,505" fill="rgba(113, 113, 122, 0.5)" />
            </svg>
          </div>
        </section>`;

const replacement3 = `        {/* Low Ticket Implementation Funnel */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden mt-8">
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Funnel Low Ticket + Llamada de Implementación
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch justify-center relative">
            {/* Flowchart */}
            <div className="flex flex-col items-center w-full lg:w-64 shrink-0 relative z-10">
              <FlowStep title="Anuncio" />
              <FlowArrow />
              <FlowStep title="Oferta low-ticket" />
              <FlowArrow />
              <FlowStep title="Checkout + bumps" />
              <FlowArrow />
              <div className="relative w-full flex justify-center">
                <FlowStep title="OTO 1 (Agendar llamada de implementación)" />
                <div className="hidden lg:flex absolute top-1/2 left-full w-[4rem] items-center -translate-y-1/2">
                  <div className="w-full border-t-2 border-dashed border-zinc-600/50"></div>
                  <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-zinc-600/50 absolute right-0"></div>
                  <span className="absolute -top-5 left-2 text-[11px] text-zinc-500 whitespace-nowrap">No reservó</span>
                </div>
              </div>
              <FlowArrow />
              <FlowStep title="OTO 2 (Upsell de pago)" />
              <FlowArrow />
              <div className="relative w-full flex justify-center">
                <FlowStep title="Página de Gracias" />
                <div className="hidden lg:flex absolute top-1/2 left-full w-[4rem] items-center -translate-y-1/2">
                  <div className="w-full border-t-2 border-dashed border-zinc-600/50"></div>
                  <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-zinc-600/50 absolute right-0"></div>
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
              <FlowStep title="Llamada con closer" final />
            </div>

            {/* Setter Outreach */}
            <div className="w-full lg:w-[400px] space-y-6 relative mt-12 lg:mt-[220px] z-10">
              
              {/* Primary */}
              <div className="bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-2xl p-6 lg:p-8">
                <h4 className="text-lg font-bold text-[#A6E1BA] mb-4">Primario</h4>
                <OutreachCard title="Compradores que no reservaron" subtitle="Llamada inmediata + texto" />
              </div>

              {/* Secondary */}
              <div className="bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-2xl p-6 lg:p-8">
                <h4 className="text-lg font-bold text-[#A6E1BA] mb-4">Secundario</h4>
                <div className="space-y-4">
                  <OutreachCard title="Agregados al carrito, no compraron" subtitle="Generalmente de baja calidad" />
                  <OutreachCard title="Reagendar no-shows" subtitle="" />
                  <OutreachCard title="Pipeline (leads de 5+ días)" subtitle="" />
                  <OutreachCard title="Aperturas de correo, sin reserva" subtitle="" />
                </div>
              </div>
            </div>
            
            {/* SVG lines for connections */}
            {/* Need to point to Closer Call from both Primary and Secondary */}
          </div>
        </section>`;

// Let's use a simpler approach that doesn't rely on absolute SVG pixels because screen sizes vary and the boxes might break lines causing height changes.
// A flex container approach where the arrow is a div that spans the gap is much better.

const improvedReplacement1 = `        {/* Common MDR Models */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden mt-8">
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
                  <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-zinc-600/50 absolute right-0"></div>
                </div>
              </div>
              <FlowArrow />
              <FlowStep title="VSL" />
              <FlowArrow />
              <div className="relative w-full flex justify-center">
                <FlowStep title="Aplicación" />
                <div className="hidden lg:flex absolute top-1/2 left-full w-12 items-center -translate-y-1/2">
                  <div className="w-full border-t-2 border-dashed border-zinc-600/50"></div>
                  <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-zinc-600/50 absolute right-0"></div>
                </div>
              </div>
              <FlowArrow />
              <FlowStep title="Página de Reservas" />
              <FlowArrow />
              <FlowStep title="Página de Gracias" />
              <FlowArrow />
              <div className="relative w-full flex justify-center">
                {/* We add an ID to reference for drawing lines if we want, or use relative wrapper */}
                <div className="absolute top-0 right-full w-12 h-full hidden lg:block">
                  <div className="absolute bottom-1/2 right-0 w-full border-b-2 border-zinc-500/50"></div>
                  <div className="w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-zinc-500/50 absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-full"></div>
                </div>
                <FlowStep title="Llamada de Ventas" final />
              </div>
            </div>

            {/* Gap placeholder */}
            <div className="hidden lg:block w-12 shrink-0"></div>

            {/* Setter Outreach */}
            <div className="w-full lg:w-[400px] flex flex-col justify-center relative">
              <div className="bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-2xl p-6 lg:p-8 relative z-10 w-full mt-4 lg:mt-16">
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

              {/* Connecting line back to Sales Call (Llamada de Ventas) */}
              {/* This draws a line out from bottom, left, and up */}
              <div className="hidden lg:block absolute top-[calc(50%+4rem)] bottom-8 -left-12 w-12 border-l-2 border-b-2 border-zinc-500/50 rounded-bl-xl z-0 pointer-events-none"></div>
            </div>
          </div>
        </section>`;

const improvedReplacement2 = `        {/* Low Ticket Funnel */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden mt-8">
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
                  <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-zinc-600/50 absolute right-0"></div>
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
                  <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-zinc-600/50 absolute right-0"></div>
                </div>
              </div>
              <FlowArrow />
              <div className="relative w-full flex justify-center">
                <FlowStep title="Llamada de Ventas" final />
              </div>
            </div>

            <div className="hidden lg:block w-12 shrink-0 relative">
               <div className="absolute top-[350px] bottom-[34px] left-0 right-0 border-l-2 border-b-2 border-zinc-500/50 rounded-bl-xl pointer-events-none"></div>
               <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-zinc-500/50 absolute left-0 bottom-[34px] translate-y-1/2"></div>
            </div>

            {/* Setter Outreach */}
            <div className="w-full lg:w-[400px] flex flex-col justify-center relative mt-4 lg:mt-32">
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
        </section>`;

const improvedReplacement3 = `        {/* Low Ticket Implementation Funnel */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden mt-8">
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
                  <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-zinc-600/50 absolute right-0"></div>
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
                  <div className="w-0 h-0 border-y-4 border-y-transparent border-l-4 border-l-zinc-600/50 absolute right-0"></div>
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
               <div className="absolute top-[550px] bottom-[34px] left-[-16px] right-0 border-l-2 border-b-2 border-zinc-500/50 rounded-bl-xl pointer-events-none"></div>
            </div>

            {/* Setter Outreach */}
            <div className="w-full lg:w-[400px] flex flex-col justify-start relative mt-4 lg:mt-48 space-y-8">
              {/* Primary */}
              <div className="bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-2xl p-6 lg:p-8 w-full">
                <h4 className="text-lg font-bold text-[#A6E1BA] mb-4">Primario</h4>
                <OutreachCard title="Compradores que no reservaron" subtitle="Llamada inmediata + texto" />
              </div>

              {/* Secondary */}
              <div className="bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-2xl p-6 lg:p-8 w-full">
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
        </section>`;

const p1 = content.indexOf("{/* Common MDR Models */}");
const p2 = content.indexOf("{/* Curated Opportunities List */}");

const p3 = content.indexOf("{/* Low Ticket Funnel */}");
const p4 = content.indexOf("{/* Low Ticket Oportunidades List */}");

const p5 = content.indexOf("{/* Low Ticket Implementation Funnel */}");
const endOfP5 = content.lastIndexOf("</section>") + 10;

if (p1 !== -1 && p2 !== -1) {
  content = content.substring(0, p1) + improvedReplacement1 + "\n\n        " + content.substring(p2);
}

// Re-evaluate positions after replacing
let c3 = content.indexOf("{/* Low Ticket Funnel */}");
let c4 = content.indexOf("{/* Low Ticket Oportunidades List */}");
if (c3 !== -1 && c4 !== -1) {
  content = content.substring(0, c3) + improvedReplacement2 + "\n\n        " + content.substring(c4);
}

let c5 = content.indexOf("{/* Low Ticket Implementation Funnel */}");
let cEnd = content.indexOf("</section>", c5) + 10;
// We actually have a nested section, so we need to find the right end tag. 
// Just using replace based on the old strings might be easier, but we have multiple sections.

// Let's do a regex or simple string split
