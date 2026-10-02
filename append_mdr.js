import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const replacement = `
        {/* Modelos de Ingresos MDR */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <TrendingUp className="text-[#D5B15B]" size={28} />
            Los Diferentes Modelos de Ingresos MDR + Requisitos Para Que Funcionen
          </h3>

          <div className="space-y-8 text-[16px] text-zinc-300">
            <p className="font-medium">
              Para contratar setters (MDRs) y lograr que rindan, debes tener un flujo de oportunidades curado.
            </p>
            
            <div className="bg-[#1A1A1E] rounded-xl p-6 border border-zinc-800">
              <p className="font-bold text-white mb-4">Flujo de oportunidades curado significa que tienes un sistema que:</p>
              <ul className="list-disc pl-5 space-y-4 text-zinc-300">
                <li>Genera nuevos leads diariamente</li>
                <li>
                  Los genera de forma consistente
                  <ul className="list-[circle] pl-5 mt-2 space-y-1 text-zinc-400">
                    <li>Mismo contexto</li>
                    <li>El mecanismo que los genera es el mismo, cada vez</li>
                  </ul>
                </li>
                <li>Tiene un SOP (procedimiento operativo estándar) claro sobre cómo convertir esa oportunidad en una cita agendada ("set") para el closer</li>
              </ul>
            </div>

            <div className="border border-[#D5B15B]/30 bg-[#D5B15B]/5 p-6 rounded-xl">
              <p className="font-bold text-[#E8CD82] mb-3">Quieres pensar en esto como una "cinta transportadora":</p>
              <ul className="list-disc pl-5 text-zinc-300 space-y-1">
                <li>Nuevos leads</li>
                <li>Misma fuente</li>
                <li>Mismo contexto</li>
                <li>Mismo proceso de ejecución</li>
                <li>Todos los días</li>
              </ul>
            </div>

            <p className="font-medium text-white">
              El sistema con el que generas el flujo de oportunidades curado va a determinar los SOPs de tu setter.
            </p>

            <div className="bg-[#3A1414]/30 border border-red-500/20 rounded-xl p-6">
              <p className="font-bold text-red-400 mb-4 flex items-center gap-2">
                <XCircle size={20} />
                Esto NO es una cinta transportadora:
              </p>
              
              <ul className="space-y-6 text-zinc-300">
                <li className="flex gap-3">
                  <div className="mt-1 text-red-400/70"><XCircle size={16} /></div>
                  <div>
                    <p className="mb-2">Meter a tu setter a un grupo de Facebook, sin ningún entrenamiento, y decirle que "vaya a buscar leads (farm)"</p>
                    <p className="mb-3">Darle acceso a un CRM lleno de leads viejos y decirle que "vaya a buscar leads (farm)"</p>
                    <div className="bg-[#1A1A1E] p-4 rounded-lg border border-zinc-800 text-sm">
                      <p className="mb-2">Esto puede funcionar en algunos casos, pero debes hacerlo DESPUÉS de haber creado un buen flujo de oportunidades MDR.</p>
                      <p className="mb-2">Esto se llama el "Proceso de Setter de Pipeline", que veremos más adelante.</p>
                      <p className="font-bold text-red-300">Pero no empieces por aquí.</p>
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 text-red-400/70"><XCircle size={16} /></div>
                  <div>
                    <p className="mb-2">Hacer que le manden mensajes directos en frío a la gente por LinkedIn, correo, o grupos random de Facebook.</p>
                    <div className="bg-[#1A1A1E] p-4 rounded-lg border border-zinc-800 text-sm">
                      <p className="font-bold text-red-300">Esto es un proceso de SDR. No de MDR.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#1A1A1E] rounded-xl p-8 border border-zinc-800">
              <p className="text-xl font-bold text-white mb-6">Si haces cualquiera de estas cosas, tu setter va a renunciar, porque TU oportunidad es mala.</p>
              
              <div className="space-y-4 mb-6 text-zinc-300">
                <p>Vas a decir que no hay buen talento disponible</p>
                <p className="font-medium text-white">La verdad es que tú no eres lo suficientemente bueno como para atraer buen talento.</p>
              </div>

              <div className="border-t border-zinc-800/80 pt-6">
                <p className="font-bold text-[#D5B15B] mb-4">En todo reclutamiento... las mejores oportunidades laborales consisten en:</p>
                <ul className="list-disc pl-5 space-y-2 text-zinc-300 mb-6">
                  <li>Excelentes sistemas de leads</li>
                  <li>Excelentes sistemas de entrenamiento</li>
                  <li>Excelente cultura</li>
                  <li>Excelente producto</li>
                  <li>Excelentes OTEs (ingresos objetivo totales)</li>
                </ul>
                <p className="font-bold text-white text-lg">Etc. → Gana en eso, y ganarás fácilmente en talento.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};`;

content = content.replace("      </div>\n    </div>\n  );\n};", replacement);

fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);
