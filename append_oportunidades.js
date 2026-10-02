import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const replacement = `
        {/* Curated Opportunities List */}
        <section className="bg-[#1A1A1E] border border-zinc-800 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Primarias */}
            <div>
              <h4 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                <Target size={24} /> Oportunidades Curadas Primarias:
              </h4>
              
              <ul className="space-y-6">
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white mb-2">Nuevos opt-ins</p>
                  <p className="text-[15px] text-zinc-400">Llamada / Texto</p>
                </li>
                
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white mb-2">Nueva app sin reserva</p>
                  <p className="text-[15px] text-zinc-400">Llamada</p>
                  <p className="text-[14px] text-zinc-500 italic mt-1">El texto se hace vía automatización (más sobre esto después)</p>
                </li>
                
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white mb-2">Apps parciales</p>
                  <p className="text-[15px] text-zinc-400">Llamada / Texto</p>
                </li>
                
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-[#D5B15B] mb-2 flex items-center gap-2"><PhoneCall size={16} /> Transferencias en vivo (live transfers)</p>
                  <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1">
                    <li>Solo si haces doble booking</li>
                    <li>Los mejores leads</li>
                    <li>Más sobre esto en mi entrenamiento de sales ops en el portal</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Secundarias & Funnels */}
            <div className="space-y-10">
              <div>
                <h4 className="text-xl font-bold text-zinc-300 mb-6 flex items-center gap-2">
                  <Layers size={24} /> Oportunidades Curadas Secundarias:
                </h4>
                <ul className="list-disc pl-5 text-[15px] text-zinc-400 space-y-3 bg-[#121214] p-6 rounded-xl border border-zinc-800/80">
                  <li>Reagendar no-shows</li>
                  <li>Setting de pipeline (leads de 5+ días de antigüedad)</li>
                  <li>Aperturas de correo, pero no reservaron</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 size={24} className="text-[#D5B15B]" /> Este flujo es EL MISMO con los siguientes funnels:
                </h4>
                
                <ul className="space-y-4">
                  <li className="bg-[#121214] p-4 rounded-xl border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                    <p className="font-medium text-white mb-1">Funnel de webinar que agenda una llamada</p>
                    <p className="text-sm text-zinc-500">(exactamente igual)</p>
                  </li>
                  
                  <li className="bg-[#121214] p-4 rounded-xl border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                    <p className="font-medium text-white mb-1">Funnel de llamada, pero sin opt-in (DTA)</p>
                    <p className="text-sm text-zinc-400">Quitas los opt-ins. Pero todas las demás oportunidades siguen ahí.</p>
                  </li>
                  
                  <li className="bg-[#121214] p-4 rounded-xl border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                    <p className="font-medium text-white mb-1">Funnel de llamada, pero en lugar de "opt-in para el video" es "opt-in para un PDF", y luego agendas una llamada</p>
                    <p className="text-sm text-zinc-400">Exactamente el mismo flujo, solo cambia el lead magnet.</p>
                  </li>
                  
                  <li className="bg-[#121214] p-4 rounded-xl border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                    <p className="font-medium text-white mb-1">Funnel VSL <span className="text-sm text-zinc-500 font-normal">(esto es solo otro nombre para un funnel de llamada)</span></p>
                    <p className="text-sm text-zinc-400">Directo e indirecto — es todo lo mismo</p>
                  </li>
                  
                  <li className="bg-gradient-to-r from-[#121214] to-[#1A1A1E] p-5 rounded-xl border border-[#D5B15B]/30 hover:border-[#D5B15B]/50 transition-colors">
                    <p className="font-bold text-[#E8CD82] mb-2">Pago u orgánico</p>
                    <p className="text-sm text-zinc-300">No hay diferencia de dónde viene el tráfico, en términos de proceso, para los setters</p>
                    <p className="text-[13px] text-zinc-500 italic mt-1">(Aparte de que el orgánico suele ser de mayor calidad)</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};`;

// Check if imports need to be updated. (Target, Layers, PhoneCall, CheckCircle2 are already in App.tsx imports, but TesisOutboundMdrSdrPage might need them).
// We imported a lot in TesisOutboundMdrSdrPage.tsx at the top:
// import { UserPlus, Briefcase, PhoneCall, Mail, Megaphone, Target, CheckCircle2, XCircle, AlertTriangle, BarChart, TrendingUp } from 'lucide-react';
// We should make sure Layers is imported.
if (!content.includes('Layers,')) {
  content = content.replace("import { UserPlus", "import { Layers, UserPlus");
}

content = content.replace("      </div>\n    </div>\n  );\n};", replacement);

fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);
