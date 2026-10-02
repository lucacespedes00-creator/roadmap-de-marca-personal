import fs from 'fs';

let content = fs.readFileSync('src/MarketingAsimilacionPage.tsx', 'utf-8');

content = content.replace(
  'Todo el mundo asumió que su estrategia fue agresiva: que tuvo que "hablar mal" de otros para posicionarse él. Según él, esa percepción era exactamente lo que buscaba generar, pero la estrategia real era la inversa. Nunca reveló esto públicamente porque muchos intentaron copiarlo y fracasaron, ya que no entendían el mecanismo real detrás.',
  'Todo el mundo asumió que su estrategia fue <strong>agresiva</strong>: que tuvo que "hablar mal" de otros para posicionarse él. Según él, esa percepción era exactamente lo que buscaba generar, pero la estrategia real era <strong>la inversa</strong>. Nunca reveló esto públicamente porque muchos intentaron copiarlo y fracasaron, ya que no entendían el mecanismo real detrás.'
);

content = content.replace(
  'Él la resume como una técnica que también usan marcas como Pepsi y Coca-Cola (comparaciones visuales/publicitarias directas o indirectas entre productos), y cree que seguirá funcionando al menos un año más si se sabe utilizar bien.',
  'Él la resume como una técnica que también usan marcas como <strong>Pepsi y Coca-Cola</strong> (comparaciones visuales/publicitarias directas o indirectas entre productos), y cree que seguirá funcionando al menos un año más si se sabe utilizar bien.'
);

content = content.replace(
  'Gracias a repetir el patrón "esto, pero mucho mejor" una y otra vez, logró que la gente le pagara sin saber exactamente por qué le pagaba. La percepción generada fue que él era superior a nivel profesional, personal, ético y de servicio, aunque nunca explicó en detalle en qué consistía esa superioridad.',
  'Gracias a repetir el patrón "esto, pero mucho mejor" una y otra vez, logró que la gente le pagara <strong>sin saber exactamente por qué</strong> le pagaba. La percepción generada fue que él era superior a nivel profesional, personal, ético y de servicio, aunque nunca explicó en detalle en qué consistía esa superioridad.'
);

content = content.replace(
  'Afirma que su habilidad para "desarmar" a otros viene de un sistema mental de detección de patrones de comportamiento. Pone como ejemplo el caso de Agustín Nievas:',
  'Afirma que su habilidad para "desarmar" a otros viene de un sistema mental de detección de patrones de comportamiento. Pone como ejemplo el caso de <strong>Agustín Nievas</strong>:'
);

content = content.replace(
  'Explica que Nievas construyó su audiencia inicial en un modelo B2C, pero luego quiso pivotar a B2B sin crear una audiencia nueva específica para ese mercado.',
  'Explica que Nievas construyó su audiencia inicial en un modelo <strong>B2C</strong>, pero luego quiso pivotar a <strong>B2B</strong> sin crear una audiencia nueva específica para ese mercado.'
);

content = content.replace(
  'Explica que la clave de su método de "desarme" es analizar los últimos 4-6 meses o un año de comportamiento de una marca personal, detectar los patrones repetitivos, y proyectar hacia dónde se dirige esa persona si sigue igual o si cambia. Según él, esto conecta con una necesidad humana profunda: la incertidumbre. La gente paga por tener respuestas o predicciones (lo compara con el tarot), y esa incomodidad ante lo incierto es más tolerada por empresarios/emprendedores que por el público general.',
  'Explica que la clave de su método de "desarme" es analizar los últimos 4-6 meses o un año de comportamiento de una marca personal, detectar los patrones repetitivos, y proyectar hacia dónde se dirige esa persona si sigue igual o si cambia. Según él, esto conecta con una necesidad humana profunda: la <strong>incertidumbre</strong>. La gente paga por tener respuestas o predicciones (lo compara con el tarot), y esa incomodidad ante lo incierto es más tolerada por empresarios/emprendedores que por el público general.'
);

content = content.replace(
  'Al final menciona que piensa repetir la estrategia, pero de una forma más ética y "blindada" legalmente, de manera que —aunque siga nombrando y hablando de otras personas— sea imposible que le bajen los videos por la forma en que elige decir las cosas.',
  'Al final menciona que piensa repetir la estrategia, pero de una forma <strong>más ética y "blindada"</strong> legalmente, de manera que —aunque siga nombrando y hablando de otras personas— sea imposible que le bajen los videos por la forma en que elige decir las cosas.'
);

content = content.replace(
  '<li className="flex gap-3">\n              <div className="mt-1 text-[#D5B15B]"><CheckCircle2 size={18} /></div>\n              <p className="text-[15px] text-zinc-400 leading-relaxed">\n                {isSummary ? "Se cumplieron todas las predicciones sobre sus lanzamientos y pivotes, ganando autoridad." : "Predijo (en un video de julio de 2024) que Nievas terminaría sacando un producto tipo \\"Robin Masterman\\", que este fracasaría, y que en enero de 2025 volvería a un modelo B2C que también fracasaría por falta de audiencia nueva. Según él, todo esto se cumplió exactamente, lo cual le dio mayor autoridad y credibilidad."}\n              </p>\n            </li>',
  `<li className="flex gap-3">
              <div className="mt-1 text-[#D5B15B]"><CheckCircle2 size={18} /></div>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {isSummary ? "Predicción acertada de un producto fallido y retorno al modelo inicial por falta de audiencia." : "Predijo (en un video de julio de 2024) que Nievas terminaría sacando un producto tipo \\"Robin Masterman\\", que este fracasaría, y que en enero de 2025 volvería a un modelo B2C que también fracasaría por falta de audiencia nueva."}
              </p>
            </li>
            <li className="flex gap-3">
              <div className="mt-1 text-[#D5B15B]"><CheckCircle2 size={18} /></div>
              <p className="text-[15px] text-zinc-400 leading-relaxed">
                {isSummary ? "El cumplimiento exacto de las predicciones le dio mayor autoridad y credibilidad." : "Según él, todo esto se cumplió exactamente, lo cual le dio mayor autoridad y credibilidad."}
              </p>
            </li>`
);

content = content.replace(/<p>/g, '<p dangerouslySetInnerHTML={{ __html: ');
content = content.replace(/<\/p>/g, ' }} />');

fs.writeFileSync('src/MarketingAsimilacionPage.tsx', content);
