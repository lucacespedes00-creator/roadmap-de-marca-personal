import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const replacement = `
        {/* Forma Antigua Manual */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Forma Antigua: Manera Manual De Configurar La Lógica De Marcado (Aún Funciona)
            </h3>
            <p className="text-[16px] text-zinc-300">Aquí está lo que solíamos hacer:</p>
          </div>

          <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6 lg:p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                <span className="text-[15px] text-zinc-300">Configuras el CRM para que todos estos segmentos de leads estén etiquetados correspondientemente.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                <div>
                  <span className="text-[15px] text-zinc-300">Luego configuras listas separadas en tu CRM para cada segmento</span>
                  <p className="text-[14px] text-zinc-500 italic mt-1">- (Ej: Lista separada para todo lo que dije arriba)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                <span className="text-[15px] text-zinc-300">Los setters saben cuáles son sus listas de mayor → menor valor</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                <div>
                  <span className="text-[15px] text-zinc-300">Comienzan cargando la lista inicial en su marcador (dialer), y trabajando a través de ella.</span>
                  <ul className="list-[circle] pl-5 mt-2 space-y-1 text-[14px] text-zinc-400">
                    <li>Refrescando periódicamente por si entran nuevos leads.</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                <span className="text-[15px] text-zinc-300">Una vez que terminan el segmento 1, pasan al segmento 2. Y así sucesivamente.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 mt-2"></div>
                <div>
                  <span className="text-[15px] text-zinc-300">Cada 10-15 min o menos, necesitan refrescar el segmento 1, 2, 3 etc. - para asegurarse de que no hayan entrado nuevos leads.</span>
                  <div className="bg-[#121214] p-4 rounded-xl border border-zinc-800/80 mt-3">
                    <p className="text-[14px] text-zinc-300 mb-2">Ej: Si están en el segmento 4, pero nuevos leads han aparecido en el segmento 1, regresan al segmento 1 y reinician el flujo.</p>
                    <ul className="list-disc pl-5 text-[14px] text-zinc-400">
                      <li>De esta manera siempre están atacando de mayor → menor valor</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Setter Flow Visual */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12 flex flex-col items-center">
          
          <div className="w-full flex justify-between text-[13px] text-zinc-500 mb-4 max-w-[600px]">
            <div className="flex items-center gap-2">
              <ArrowDown size={14} />
              <span>El setter trabaja de arriba → abajo, llamando primero y texteando</span>
            </div>
          </div>

          <div className="w-full max-w-[600px] flex flex-col space-y-3 relative">
            
            {/* Arrow connecting middle back to top */}
            <div className="hidden md:block absolute -right-24 top-[30px] bottom-[300px] w-16 border-r-2 border-t-2 border-b-2 border-[#D5B15B]/50 rounded-r-xl opacity-70">
              <div className="absolute -top-[7.5px] -left-[10px] text-[#D5B15B]"><ArrowLeft size={18} /></div>
              <div className="absolute top-1/2 -right-[130px] -translate-y-1/2 text-[12px] text-zinc-400 w-[110px]">
                ¿Nuevo lead caliente? → reiniciar desde arriba
              </div>
            </div>

            {/* Hottest */}
            <div className="w-full bg-[#3A1414]/30 border border-red-500/30 rounded-xl p-4 text-center">
              <p className="font-bold text-red-400 text-[16px]">Te acaban de responder por texto</p>
              <p className="text-[14px] text-red-400/70 mt-1">Llamar al instante, luego texto</p>
            </div>
            
            <div className="w-full bg-[#3A1414]/30 border border-red-500/30 rounded-xl p-4 text-center">
              <p className="font-bold text-red-400 text-[16px]">Nuevas apps · sin reserva</p>
              <p className="text-[14px] text-red-400/70 mt-1">Llamada → texto → auto-email</p>
            </div>

            {/* Warm */}
            <div className="w-full bg-[#D5B15B]/10 border border-[#D5B15B]/30 rounded-xl p-4 text-center">
              <p className="font-bold text-[#E8CD82] text-[16px]">Nuevas apps parciales</p>
              <p className="text-[14px] text-[#E8CD82]/70 mt-1">Llamada → texto → auto-email</p>
            </div>

            <div className="w-full bg-[#D5B15B]/10 border border-[#D5B15B]/30 rounded-xl p-4 text-center">
              <p className="font-bold text-[#E8CD82] text-[16px]">Nuevos opt-ins</p>
              <p className="text-[14px] text-[#E8CD82]/70 mt-1">Llamada → texto → auto-email</p>
            </div>

            <div className="w-full bg-[#D5B15B]/10 border border-[#D5B15B]/30 rounded-xl p-4 text-center relative">
              <p className="font-bold text-[#E8CD82] text-[16px]">Aperturas de correo & respuestas de texto</p>
              <p className="text-[14px] text-[#E8CD82]/70 mt-1">Llamada, luego seguimiento por texto</p>
              {/* Arrow anchor */}
              <div className="absolute right-0 top-1/2 w-4 border-b-2 border-[#D5B15B]/50 -translate-y-1/2 hidden md:block"></div>
            </div>

            {/* Today's leads */}
            <div className="w-full bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-xl p-4 text-center">
              <p className="font-bold text-[#A6E1BA] text-[16px]">No-shows de hoy</p>
              <p className="text-[14px] text-[#A6E1BA]/70 mt-1">Llamada y texto</p>
            </div>

            <div className="w-full bg-[#EBF7EF]/5 border border-[#A6E1BA]/20 rounded-xl p-4 text-center">
              <p className="font-bold text-[#A6E1BA] text-[16px]">Leads de hoy · 2do & 3er marcado</p>
              <p className="text-[14px] text-[#A6E1BA]/70 mt-1">Horas pico AM + horas pico PM</p>
            </div>

            {/* Aging -> pipeline */}
            <div className="w-full bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
              <p className="font-bold text-blue-400 text-[16px]">Leads antiguos · más recientes primero</p>
              <p className="text-[14px] text-blue-400/70 mt-1">Día 2 &gt; día 3 &gt; ... día 5</p>
            </div>

            <div className="w-full bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
              <p className="font-bold text-blue-400 text-[16px]">Lista de pipeline (después del día 5)</p>
              <p className="text-[14px] text-blue-400/70 mt-1">Hasta 90 días, más recientes primero</p>
            </div>
            
          </div>

          <div className="w-full max-w-[600px] flex flex-wrap gap-4 mt-8 justify-center text-[13px] text-zinc-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#3A1414]/80 border border-red-500/50"></div>
              <span>Más calientes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#D5B15B]/20 border border-[#D5B15B]/50"></div>
              <span>Tibios</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-[#EBF7EF]/10 border border-[#A6E1BA]/50"></div>
              <span>Leads de hoy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-blue-500/20 border border-blue-500/50"></div>
              <span>Antiguos → pipeline</span>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};
`;

content = content.replace("      </div>\n    </div>\n  );\n};", replacement);

if (!content.includes(' ArrowLeft ')) {
  content = content.replace(/import \{([^\}]+)\} from 'lucide-react';/, "import {$1, ArrowLeft } from 'lucide-react';");
}

fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);

