import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const replacement = `
        {/* Live Events Funnels */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Funnels de Eventos en Vivo:
            </h3>
          </div>

          <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-6 lg:p-8">
            <h4 className="text-xl font-bold text-[#E8CD82] mb-6">
              Funnel de Reto (Challenge) / Evento en Vivo / Webinar en Vivo:
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <ul className="list-disc pl-5 text-[15px] text-zinc-300 space-y-3 mb-6">
                  <li className="text-zinc-400 italic">(Todos son similares)</li>
                  <li>Gratis o pago</li>
                  <li>Orgánico o pago</li>
                </ul>

                <div className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80 mt-4">
                  <p className="font-bold text-white mb-2">Este modelo aplica a poca gente, así que no lo voy a cubrir en detalle.</p>
                </div>
              </div>

              <div>
                <p className="font-bold text-[#A6E1BA] mb-4">Los setters pueden:</p>
                <ul className="space-y-4">
                  <li className="bg-[#121214] p-4 rounded-xl border border-zinc-800/80">
                    <p className="font-medium text-white mb-1">Hacer DM a la gente en el grupo <span className="text-zinc-500 font-normal">(si es reto o evento en vivo)</span></p>
                    <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1">
                      <li>Posts de 2 pasos, etc.</li>
                      <li>Puede ser antes, durante, después</li>
                    </ul>
                  </li>
                  
                  <li className="bg-[#121214] p-4 rounded-xl border border-zinc-800/80">
                    <p className="font-medium text-white mb-1">Contactar a la gente cuando se une</p>
                    <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1">
                      <li>Asegurarse de que asistan</li>
                      <li>Agendar una cita después para hacer seguimiento</li>
                      <li>Vender temprano</li>
                    </ul>
                  </li>

                  <li className="bg-[#121214] p-4 rounded-xl border border-zinc-800/80">
                    <p className="text-sm text-zinc-300">Contactar a la gente que no compra (o no agenda) después, y agendarlos con un closer</p>
                  </li>

                  <li className="bg-[#121214] p-4 rounded-xl border border-zinc-800/80">
                    <p className="text-sm text-zinc-300">Hacer llamadas de implementación para un producto de 1-2k vendido vía challenge, para agendar un producto de 10k</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Encrucijada */}
        <section className="bg-gradient-to-br from-[#3A1414]/30 to-[#1A1A1E] border border-red-500/20 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="mb-10 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <Target className="text-red-400" size={32} />
              Estamos Ahora En Una Encrucijada:
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {/* Col 1 */}
            <div className="bg-[#121214]/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-white mb-4 border-b border-zinc-800 pb-3">
                De aquí en adelante, vamos a hablar de sistemas de setters en relación a los siguientes funnels:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-[15px] text-zinc-300">Funnel VSL / Llamada</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-[15px] text-zinc-300">Funnel de Webinar con Llamada (en vivo o automático)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-[15px] text-zinc-300">Funnel Directo a Aplicación (DTA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-[15px] text-zinc-300">Funnel de Lead Magnet en PDF → Agendar una llamada</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[15px] text-zinc-300">Funnel de Comprador de Ticket Bajo</span>
                    <p className="text-[13px] text-zinc-500 mt-1">Solo outbound. No llamada de implementación.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Col 2 */}
            <div className="bg-[#121214]/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-[#E8CD82] mb-4 border-b border-zinc-800 pb-3">
                Razón por la que:
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8CD82] shrink-0 mt-2"></div>
                  <span className="text-[15px] text-zinc-300">Estos funnels son los más comunes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8CD82] shrink-0 mt-2"></div>
                  <span className="text-[15px] text-zinc-300">También te dan la mejor y más clara idea de cómo debería funcionar un sistema de setting adecuado</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8CD82] shrink-0 mt-2"></div>
                  <span className="text-[15px] text-zinc-300">Si entiendes estos, puedes aplicarlos fácilmente a todos los demás modelos.</span>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="bg-[#121214]/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-zinc-300 mb-4 border-b border-zinc-800 pb-3">
                Lo siguiente estará todo en entrenamientos separados:
              </h4>
              <ul className="space-y-3">
                <li className="bg-[#1A1A1E] p-3 rounded-lg border border-zinc-800/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                    <PhoneCall size={14} className="text-zinc-400" />
                  </div>
                  <span className="text-[14px] text-zinc-300">Cómo hacer llamadas de implementación (para 2k auto y LT)</span>
                </li>
                <li className="bg-[#1A1A1E] p-3 rounded-lg border border-zinc-800/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                    <Mail size={14} className="text-zinc-400" />
                  </div>
                  <span className="text-[14px] text-zinc-300">DM Setting (sistema completamente diferente)</span>
                </li>
                <li className="bg-[#1A1A1E] p-3 rounded-lg border border-zinc-800/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                    <Target size={14} className="text-zinc-400" />
                  </div>
                  <span className="text-[14px] text-zinc-300">Eventos en vivo / challenges / etc. (sistema diferente)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};`;

content = content.replace("      </div>\n    </div>\n  );\n};", replacement);
fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);

