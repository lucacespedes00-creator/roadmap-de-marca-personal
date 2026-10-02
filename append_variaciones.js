import fs from 'fs';
let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const oldToc = `{"id":"section-28","title":"Scripts de Llamadas"}]}`;
const newToc = `{"id":"section-28","title":"Scripts de Llamadas"},{"id":"section-29","title":"Diferentes Variaciones"}]}`;
content = content.replace(oldToc, newToc);

const oldEnd = `                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
        </div>
      </div>
    </div>
  );
};`;

const newEnd = `                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-zinc-800 my-16" />

        {/* --- NUEVA SECCIÓN: Diferentes Variaciones --- */}
        <section id="section-29" className="mt-20 scroll-mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-pink-500/20 p-2 rounded-lg text-pink-400">
              <ListOrdered size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Diferentes Variaciones Que Vamos a Cubrir También:</h2>
          </div>

          <div className="bg-[#1A1A1E] border border-zinc-800/80 rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h3 className="text-[18px] font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-pink-400">#</span> Leads de Compradores
                </h3>
                <ul className="list-disc pl-5 space-y-3 text-[15px] text-zinc-300 marker:text-pink-400">
                  <li>Para compradores, podemos usar un encuadre de servicio al cliente.</li>
                  <li>Esto es muy efectivo.</li>
                  <li>Significa que la introducción va a ser diferente, y el resto es igual.</li>
                </ul>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h3 className="text-[18px] font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-pink-400">#</span> Llamadas a No-Shows
                </h3>
                <ul className="list-disc pl-5 space-y-3 text-[15px] text-zinc-300 marker:text-pink-400">
                  <li>Introducción diferente</li>
                  <li>Mismo script después de eso</li>
                </ul>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h3 className="text-[18px] font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-pink-400">#</span> Pipeline Setting
                </h3>
                <p className="text-[14px] text-zinc-400 italic mb-3">(Estos son leads de 5+ días de antigüedad)</p>
                <ul className="list-disc pl-5 space-y-3 text-[15px] text-zinc-300 marker:text-pink-400">
                  <li>Si tienen más de 21 días de antigüedad, cambiamos la introducción levemente.</li>
                  <li>El resto es igual.</li>
                </ul>
              </div>

              <div className="bg-[#121214] border border-zinc-800 p-6 rounded-xl">
                <h3 className="text-[18px] font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-pink-400">#</span> Llamada de Implementación (Funnel de Comprador)
                </h3>
                <ul className="list-disc pl-5 space-y-3 text-[15px] text-zinc-300 marker:text-pink-400">
                  <li>Esto es cuando el comprador de bajo ticket hace una llamada de onboarding con tu setter.</li>
                  <li>El setter toma el encuadre inicial de servicio al cliente, y luego hace el pitch de la llamada con el closer.</li>
                  <li>Tengo un entrenamiento separado sobre esto, no lo vamos a cubrir acá.</li>
                </ul>
              </div>

            </div>
          </div>
        </section>
      </div>
        </div>
      </div>
    </div>
  );
};`;

content = content.replace(oldEnd, newEnd);
fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);
