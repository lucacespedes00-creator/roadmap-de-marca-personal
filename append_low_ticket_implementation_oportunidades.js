import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const replacement = `
        {/* Low Ticket Implementation Oportunidades List */}
        <section className="bg-[#1A1A1E] border border-zinc-800 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Primarias */}
            <div>
              <h4 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                <Target size={24} /> Oportunidades Curadas Primarias:
              </h4>
              
              <ul className="space-y-6">
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white mb-2">Nuevos compradores</p>
                  <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1">
                    <li>Se puede priorizar en la lógica por AOV</li>
                    <li>Hablaremos de esto más adelante</li>
                  </ul>
                </li>
                
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white">Llamadas de implementación</p>
                </li>
              </ul>
            </div>

            {/* Secundarias */}
            <div>
              <h4 className="text-xl font-bold text-zinc-300 mb-6 flex items-center gap-2">
                <Layers size={24} /> Oportunidades Curadas Secundarias:
              </h4>
              
              <ul className="space-y-6">
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white mb-2">Agregaron al carrito / no compraron</p>
                  <p className="text-[15px] text-zinc-500 italic">Generalmente, estas son una mierda</p>
                </li>
              </ul>

              <div className="mt-6">
                <ul className="list-disc pl-5 text-[15px] text-zinc-400 space-y-3 bg-[#121214] p-6 rounded-xl border border-zinc-800/80">
                  <li>Reagendar no-shows</li>
                  <li>Setting de pipeline (leads de 5+ días de antigüedad)</li>
                  <li>Aperturas de correo, no reservaron</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-10 bg-gradient-to-r from-[#121214] to-[#1A1A1E] p-6 lg:p-8 rounded-xl border border-[#D5B15B]/40 hover:border-[#D5B15B]/60 transition-colors shadow-sm">
             <p className="text-[16px] text-zinc-300 leading-relaxed italic">
                <strong className="text-white font-bold">Este proceso es prácticamente el mismo que un autowebinar de 1-2k.</strong> La única diferencia es que los setters también podrán llamar a los opt-ins / registrados al webinar — lo cual es una ventaja enorme. <strong className="text-[#E8CD82] font-bold">Duplicamos el ingreso vendiendo a los opt-ins de nuestro high-ticket, comparado con lo que generamos por ascensiones.</strong>
             </p>
          </div>
        </section>
      </div>
    </div>
  );
};`;

content = content.replace("      </div>\n    </div>\n  );\n};", replacement);
fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);

