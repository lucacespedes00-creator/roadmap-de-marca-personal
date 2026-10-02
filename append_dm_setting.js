import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const replacement = `
        {/* DM Setting Funnel */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden mt-8 mb-12">
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
      </div>
    </div>
  );
};`;

content = content.replace("      </div>\n    </div>\n  );\n};", replacement);
fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);

