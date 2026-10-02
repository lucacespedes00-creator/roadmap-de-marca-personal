import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const s1 = content.indexOf("{/* Common MDR Models */}");
const e1 = content.indexOf("{/* Curated Opportunities List */}");
const s2 = content.indexOf("{/* Low Ticket Funnel */}");
const e2 = content.indexOf("{/* Low Ticket Oportunidades List */}");
const s3 = content.indexOf("{/* Low Ticket Implementation Funnel */}");
const e3 = content.indexOf("      </div>\n    </div>\n  );\n};");

// Improved components (same as above but carefully constructed)

const rep1 = `        {/* Common MDR Models */}
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
`;

const rep2 = `        {/* Low Ticket Funnel */}
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
`;

const rep3 = `        {/* Low Ticket Implementation Funnel */}
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
`;

let result = content.substring(0, s1) + rep1 + content.substring(e1, s2) + rep2 + content.substring(e2, s3) + rep3 + content.substring(e3);

fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', result);
