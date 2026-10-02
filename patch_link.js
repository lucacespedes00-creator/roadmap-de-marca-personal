import fs from 'fs';
let code = fs.readFileSync('src/App.tsx', 'utf8');

const targetStr = `<AreaItem 
          icon={PlayCircle} 
          title="Dominar el Scroll" 
          desc="Estrategia para adquirir clientes con contenido y maximizar confianza" 
          onClick={() => setActivePageId('linkedin_insight_summary')} 
        />`;

const replacementStr = `<AreaItem 
          icon={PlayCircle} 
          title="Dominar el Scroll" 
          desc="Estrategia para adquirir clientes con contenido y maximizar confianza" 
          onClick={() => setActivePageId('linkedin_insight_summary')} 
        />
        <AreaItem 
          icon={BarChart} 
          title="Arquitectura GTM" 
          desc="Estrategia Go to Market para B2B" 
          onClick={() => setActivePageId('linkedin_insight_gtm')} 
        />`;

code = code.replace(targetStr, replacementStr);
fs.writeFileSync('src/App.tsx', code);
