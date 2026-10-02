import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

// The TableOfContents is injected as a React prop:
// <TableOfContents sections={[{"id":"section-0","title":"Representantes de Desarrollo de Ventas (SDRs)"},...]} />

const match = content.match(/<TableOfContents sections={(\[[^]+?\])} \/>/);
if (match) {
  let sections = JSON.parse(match[1]);
  sections.forEach(sec => {
    if (sec.title.includes('Veredicto')) sec.title = 'Veredicto: SDR vs MDR';
    if (sec.title.includes('Diferentes Modelos de Ingresos')) sec.title = 'Modelos de Ingresos MDR';
    if (sec.title.includes('Qué Hacer Si No Tienes')) sec.title = 'Si Faltan Leads';
    if (sec.title.includes('Buckets de Leads')) sec.title = 'Buckets de Leads';
    if (sec.title.includes('Forma Antigua')) sec.title = 'Lógica de Marcado Manual';
    if (sec.title.includes('Forma Nueva')) sec.title = 'Dialer.io Automático';
    if (sec.title.includes('Modelos MDR Comunes')) sec.title = 'Modelos MDR Comunes';
    if (sec.title.includes('Eventos en Vivo')) sec.title = 'Eventos en Vivo';
    if (sec.title.includes('Encrucijada')) sec.title = 'Encrucijada';
    if (sec.title.includes('Cuántos Leads Por Setter')) sec.title = 'Leads Por Setter Al Mes';
    if (sec.title.includes('Velocidad al Lead')) sec.title = 'Velocidad al Lead';
    if (sec.title.includes('Representantes de Desarrollo de Ventas')) sec.title = 'SDRs (Outbound)';
    if (sec.title.includes('Representantes de Desarrollo de Marketing')) sec.title = 'MDRs (Inbound)';
  });
  
  content = content.replace(match[0], `<TableOfContents sections={${JSON.stringify(sections)}} />`);
  fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);
  console.log('Fixed titles');
}
