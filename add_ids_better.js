import fs from 'fs';

let lines = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8').split('\n');

const sectionData = [
  { text: "Modelos Generales SDR vs MDR", id: "sdr-vs-mdr", title: "SDR vs MDR" },
  { text: "Representantes de Desarrollo de Ventas (SDRs)", id: "sdr", title: "SDRs (Outbound)" },
  { text: "Representantes de Desarrollo de Marketing (MDRs)", id: "mdr", title: "MDRs (Inbound)" },
  { text: "El Antiguo Modelo SDR", id: "antiguo-modelo", title: "Antiguo Modelo SDR" },
  { text: "Modelos MDR Comunes Que Funcionan.", id: "modelos-comunes", title: "Modelos MDR Comunes" },
  { text: "Cuál Deberías Construir Primero", id: "cual-construir", title: "Cuál Construir Primero" },
  { text: "Funnel Low Ticket + Setter Outbound", id: "low-ticket-setter", title: "Low Ticket + Setter" },
  { text: "El Modelo Híbrido", id: "modelo-hibrido", title: "El Modelo Híbrido" },
  { text: "Funnel Low Ticket + Llamada de Implementación", id: "low-ticket-llamada", title: "Low Ticket + Llamada" },
  { text: "KPIs de Outbound Puro", id: "kpis-outbound", title: "KPIs de Outbound" },
  { text: "Funnel de DM Setting", id: "funnel-dm", title: "Funnel DM Setting" },
  { text: "Cómo Contratar MDRs", id: "como-contratar", title: "Cómo Contratar" },
  { text: "Funnels de Eventos en Vivo", id: "eventos-vivo", title: "Eventos en Vivo" },
  { text: "Expectativas de MDR", id: "expectativas", title: "Expectativas (Llamada)" },
  { text: "Qué Hacer Si No Tienes Suficientes Leads", id: "sin-leads", title: "Si Faltan Leads" },
  { text: "¿Deberían Los Setters Tomar Reservas Directas?", id: "reservas", title: "¿Reservas Directas?" },
  { text: "El Problema de Capacidad de Triage", id: "problema-triage", title: "Problema de Triage" },
  { text: "KPIs de Setter Para Funnel de Llamada", id: "kpis-setter", title: "KPIs del Setter" },
  { text: "Velocidad al Lead", id: "velocidad", title: "Velocidad al Lead" },
  { text: "Buckets de Leads de Mayor", id: "buckets", title: "Buckets de Leads" },
  { text: "Forma Antigua:", id: "forma-antigua", title: "Lógica Manual" },
  { text: "Dialer.io", id: "dialerio", title: "Dialer.io" }
];

let tocSections = [];

// Remove previous IDs from sections
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('<section id=')) {
    lines[i] = lines[i].replace(/id="[^"]+" /, '');
    lines[i] = lines[i].replace(/id="[^"]+"/, '');
  }
}

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('<section')) {
    // Find the next h3 to identify this section
    for (let j = i + 1; j < Math.min(i + 20, lines.length); j++) {
      if (lines[j].includes('<h3')) {
        let textBlock = lines.slice(j, j + 5).join(' '); // grab next 5 lines
        
        let matched = false;
        for (let data of sectionData) {
          if (textBlock.includes(data.text)) {
            // Add ID
            lines[i] = lines[i].replace('<section', `<section id="${data.id}"`);
            tocSections.push({ id: data.id, title: data.title });
            matched = true;
            break;
          }
        }
        if (matched) break;
      }
    }
  }
}

// Ensure unique sections only (just in case)
const uniqueTocSections = [];
const seenIds = new Set();
for (const sec of tocSections) {
  if (!seenIds.has(sec.id)) {
    seenIds.add(sec.id);
    uniqueTocSections.push(sec);
  }
}

// Replace the previous TOC call
const returnIndex = lines.findIndex(line => line.includes('<TableOfContents sections='));
if (returnIndex !== -1) {
  lines[returnIndex] = `      <TableOfContents sections={${JSON.stringify(uniqueTocSections)}} />`;
}

fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', lines.join('\n'));
