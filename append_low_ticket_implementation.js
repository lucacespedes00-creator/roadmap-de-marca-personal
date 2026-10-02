import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const replacement = `
        {/* Low Ticket Implementation Funnel */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden mt-8">
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Funnel Low Ticket + Llamada de Implementación
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
            {/* Flowchart */}
            <div className="flex flex-col items-center w-full lg:w-1/3 relative">
              <FlowStep title="Anuncio" />
              <FlowArrow />
              <FlowStep title="Oferta low-ticket" />
              <FlowArrow />
              <FlowStep title="Checkout + bumps" />
              <FlowArrow />
              <div className="relative w-full flex justify-center">
                <FlowStep title="OTO 1 (Agendar llamada de implementación)" />
                {/* Conector punteado hacia Primary con texto */}
                <div className="hidden lg:block absolute top-[20px] left-full w-12 border-t-2 border-dashed border-zinc-600/50">
                  <span className="absolute -top-5 left-1 text-[11px] text-zinc-500 whitespace-nowrap">No reservó</span>
                </div>
              </div>
              <FlowArrow />
              <FlowStep title="OTO 2 (Upsell de pago)" />
              <FlowArrow />
              <div className="relative w-full flex justify-center">
                <FlowStep title="Página de Gracias" />
                {/* Conector punteado hacia Secondary */}
                <div className="hidden lg:block absolute top-[20px] left-full w-12 border-t-2 border-dashed border-zinc-600/50"></div>
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
            <div className="w-full lg:w-2/3 space-y-6 relative">
              
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
              
              {/* Conector desde Setter a Sales Call */}
              <div className="hidden lg:block absolute bottom-[-10px] left-[-20%] w-[30%] h-32 border-l-2 border-b-2 border-zinc-600/50 rounded-bl-xl z-0 pointer-events-none"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};`;

content = content.replace("      </div>\n    </div>\n  );\n};", replacement);
fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);
