import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const newText = `
        {/* Mejores Prácticas */}
        <section className="bg-[#121214] border border-[#27272A]/80 rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden mt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Mejores Prácticas de Lógica de Marcado
          </h3>
          <p className="text-[16px] text-zinc-300 leading-relaxed mb-8">
            Sin importar qué opción elijas, deberías por lo menos estar informado sobre las mejores prácticas, para que cuando alguien te configure esto, estés al tanto.
          </p>

          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold text-[#E8CD82] mb-4">Mejores Prácticas</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8CD82] shrink-0 mt-2"></div>
                  <div className="text-[15px] text-zinc-300">
                    <strong>Los nuevos leads deben ser contactados inmediatamente.</strong>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8CD82] shrink-0 mt-2"></div>
                  <div className="text-[15px] text-zinc-300">
                    <strong>Los nuevos leads que están más avanzados en el funnel tienen mayor prioridad</strong> que los que están menos avanzados
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-400">
                      <li>AOV más alto &gt; AOV más bajo</li>
                      <li>Apps sin reserva &gt; opt-ins</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8CD82] shrink-0 mt-2"></div>
                  <div className="text-[15px] text-zinc-300">
                    <strong>3 marcados el primer día</strong>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-400">
                      <li>1 inmediato</li>
                      <li>Los otros 2 idealmente durante horas pico si es posible</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8CD82] shrink-0 mt-2"></div>
                  <div className="text-[15px] text-zinc-300">
                    <strong>Cada nuevo lead se auto-inscribe en una secuencia de correo</strong>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-400">
                      <li>Esto no debería ser un "correo de marketing"</li>
                      <li>Debería parecer un contacto directo del setter.</li>
                      <li>Completamente automatizado.</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8CD82] shrink-0 mt-2"></div>
                  <div className="text-[15px] text-zinc-300">
                    <strong>Envío de texto inmediato a nuevos leads</strong>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-400">
                      <li>Texto en el día 2 y 3 (usualmente automatizado)</li>
                      <li>Voy a cubrir el tema de textos en un momento</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8CD82] shrink-0 mt-2"></div>
                  <div className="text-[15px] text-zinc-300">
                    <strong>Los setters siempre deberían maximizar las horas pico</strong>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-400">
                      <li>Y deberías saber cuáles son</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8CD82] shrink-0 mt-2"></div>
                  <div className="text-[15px] text-zinc-300">
                    <strong>Cadencia de 5-7 días</strong>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-400">
                      <li>Puedes medir esto. Generalmente después de 5 días, no vale la pena.</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8CD82] shrink-0 mt-2"></div>
                  <div className="text-[15px] text-zinc-300">
                    <strong>Después del día 5 → 7:</strong> Transición a la cadencia de "setter de pipeline"
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8CD82] shrink-0 mt-2"></div>
                  <div className="text-[15px] text-zinc-300">
                    <strong>Priorizar los leads más recientes</strong>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-400">
                      <li>Día 2 &gt; Día 3</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8CD82] shrink-0 mt-2"></div>
                  <div className="text-[15px] text-zinc-300">
                    <strong>Ponderar otros criterios apropiadamente, si aplica</strong>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-400">
                      <li>Score de crédito, liquidez, etc.</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8CD82] shrink-0 mt-2"></div>
                  <div className="text-[15px] text-zinc-300">
                    <strong>Criterios/etiquetado de dar de baja (unenrollment)</strong>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-400">
                      <li>Si agendan una demo (vía setter/marketing), decir DNC (no llamar) → dar de baja</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-zinc-800/80">
              <h4 className="text-xl font-bold text-[#A6E1BA] mb-4">Mejores Prácticas - Envío de Textos</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A6E1BA] shrink-0 mt-2"></div>
                  <div className="text-[15px] text-zinc-300">
                    Para textos, recomiendo automatizar o usar IA para nuevos leads.
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-400">
                      <li>Vamos a cubrir esto en un momento</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A6E1BA] shrink-0 mt-2"></div>
                  <div className="text-[15px] text-zinc-300">
                    Para apps sin reserva:
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-zinc-400">
                      <li>Usamos el SMS de IA de Saleskick para reagendarlas automáticamente de inmediato.</li>
                      <li>Esto es muy efectivo, y no tenemos que pagar comisiones al setter.</li>
                      <li>También podrías configurar una automatización básica de SMS para esto si no quieres usar Saleskick.</li>
                      <li>Así que para estas, los setters solo llaman.</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-[#3A1414]/20 border border-red-500/20 rounded-xl">
            <p className="text-[15px] text-zinc-300 italic">
              De nuevo, recomendaría contactar a Edward o Dialer si quieres que te configuren esto. Y de nuevo — si eres nuevo y estás contratando a tu primer setter — NO TE ABRUMES. Simplemente puedes aprender la teoría y dejar que el setter lo haga andar. No es tan gran cosa.
            </p>
          </div>
        </section>
`;

const splitByConclusion = content.split('        {/* Conclusión Final */}');
if (splitByConclusion.length === 2) {
  content = splitByConclusion[0] + newText + '\n        {/* Conclusión Final */}' + splitByConclusion[1];
  fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);
  console.log('Text added');
} else {
  console.log('Failed to find where to add text');
}
