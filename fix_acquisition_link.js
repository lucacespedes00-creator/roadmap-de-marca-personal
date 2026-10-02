import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

const target = `{/* Aquí irán las subpáginas en el futuro */}`;
const replacement = `<AreaItem 
          icon={Briefcase} 
          title="Modelos MDR vs. SDR" 
          desc="Definición y comparación de equipos de prospección." 
          onClick={() => setActivePageId('tesis_outbound_mdr_sdr')} 
        />`;

content = content.replace(target, replacement);

fs.writeFileSync('src/App.tsx', content);
