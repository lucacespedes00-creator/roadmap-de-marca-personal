import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const componentsToAdd = `const FlowStep = ({ title, final = false }: { title: string, final?: boolean }) => (
  <div className={\`w-full max-w-[240px] py-3.5 px-4 rounded-xl text-center font-bold text-[14px] shadow-sm
    \${final 
      ? 'bg-[#FFECE1] text-[#9A4B22]' 
      : 'bg-[#ECEEFE] text-[#484B75]'
    }
  \`}>
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
);`;

// Add imports if necessary
if (!content.includes('FlowStep')) {
  // Add ArrowDown to lucide-react imports if not there (it is there in App.tsx but maybe not here)
  if (!content.includes('ArrowDown')) {
    content = content.replace("import { UserPlus", "import { ArrowDown, UserPlus");
  }
  
  content = content.replace("export const TesisOutboundMdrSdrPage", componentsToAdd + "\n\nexport const TesisOutboundMdrSdrPage");

  const replacement = `
        {/* Common MDR Models */}
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

          <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
            {/* Flowchart */}
            <div className="flex flex-col items-center w-full lg:w-1/3 relative">
              <FlowStep title="Anuncio" />
              <FlowArrow />
              <FlowStep title="Página de Registro" />
              <FlowArrow />
              <FlowStep title="VSL" />
              <FlowArrow />
              <FlowStep title="Aplicación" />
              <FlowArrow />
              <FlowStep title="Página de Reservas" />
              <FlowArrow />
              <FlowStep title="Página de Gracias" />
              <FlowArrow />
              <FlowStep title="Llamada de Ventas" final />
              
              {/* Conector punteado imaginario hacia Outreach */}
              <div className="hidden lg:block absolute top-[120px] -right-8 w-16 border-t-2 border-dashed border-zinc-600/50"></div>
              <div className="hidden lg:block absolute top-[280px] -right-8 w-16 border-t-2 border-dashed border-zinc-600/50"></div>
            </div>

            {/* Setter Outreach */}
            <div className="w-full lg:w-2/3 bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-2xl p-6 lg:p-8 relative">
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
}

