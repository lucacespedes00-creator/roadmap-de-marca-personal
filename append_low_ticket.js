import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const replacement = `
        {/* Low Ticket Funnel */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden mt-8">
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Funnel Low Ticket + Setter Outbound
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
              <FlowStep title="OTO 1 (upsell)" />
              <FlowArrow />
              <FlowStep title="OTO 2 (upsell)" />
              <FlowArrow />
              <FlowStep title="Nuevo comprador" />
              <FlowArrow />
              <FlowStep title="Llamada de Ventas" final />
              
              {/* Conector punteado imaginario hacia Outreach */}
              <div className="hidden lg:block absolute top-[200px] -right-8 w-16 border-t-2 border-dashed border-zinc-600/50"></div>
              <div className="hidden lg:block absolute top-[440px] -right-8 w-16 border-t-2 border-dashed border-zinc-600/50"></div>
            </div>

            {/* Setter Outreach */}
            <div className="w-full lg:w-2/3 bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-2xl p-6 lg:p-8 relative">
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
              
              {/* Conector desde Setter a Sales Call */}
              <div className="hidden lg:block absolute -bottom-16 -left-[20%] w-[30%] h-16 border-l-2 border-b-2 border-zinc-600/50 rounded-bl-xl"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};`;

content = content.replace("      </div>\n    </div>\n  );\n};", replacement);
fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);

