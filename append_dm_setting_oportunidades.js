import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const replacement = `
        {/* DM Setting Oportunidades List */}
        <section className="bg-[#1A1A1E] border border-zinc-800 rounded-[2rem] p-8 lg:p-10 shadow-lg mt-8 relative overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Primarias */}
            <div>
              <h4 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                <Target size={24} /> Oportunidades Curadas Primarias:
              </h4>
              
              <ul className="space-y-6">
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white mb-2">DMs entrantes (de contenido, reels, pago)</p>
                  <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1">
                    <li>Indirecto (Lead Magnet)</li>
                    <li>Directo (Oferta)</li>
                  </ul>
                </li>
                
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white mb-2">Comentarios (de posts impulsados/potenciados o posts orgánicos)</p>
                  <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1">
                    <li>Manychat/DM Outbound
                      <ul className="list-[circle] pl-5 mt-1 space-y-1">
                        <li>Indirecto y Directo</li>
                      </ul>
                    </li>
                  </ul>
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
                  <p className="font-bold text-white mb-2">Nuevos seguidores</p>
                  <p className="text-[14px] text-zinc-400">No puedes depender únicamente de estos a menos que consigas MUCHOS. Pero aun así vale la pena hacerlo.</p>
                </li>
                
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white mb-2">Números de teléfono, generados desde:</p>
                  <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1 mb-3">
                    <li>Opt-in del link en la bio</li>
                    <li>Opt-in de lead magnet</li>
                  </ul>
                  <p className="text-[14px] text-zinc-500 italic">*El DM Setter NO es un setter telefónico (usualmente)*</p>
                </li>
                
                <li className="bg-[#121214] p-5 rounded-xl border border-zinc-800/80">
                  <p className="font-bold text-white mb-2">Encuestas, quizzes, cajas de preguntas, sliders</p>
                  <p className="text-[14px] text-zinc-400">Todas son oportunidades de DM outbound. Complementan, no se debe depender de ellas.</p>
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
