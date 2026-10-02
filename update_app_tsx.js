import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

content = content.replace(
  "import { LinkedInInsightGtmPage } from './LinkedInInsightGtmPage';",
  "import { LinkedInInsightGtmPage } from './LinkedInInsightGtmPage';\nimport { MarketingAsimilacionPage } from './MarketingAsimilacionPage';"
);

content = content.replace(
  "| 'default_marketing_parent' | 'custom';",
  "| 'default_marketing_parent' | 'default_marketing_asimilacion' | 'custom';"
);

content = content.replace(
  "{ id: 'marketing_parent', title: 'Marketing', type: 'default_marketing_parent' },",
  "{ id: 'marketing_parent', title: 'Marketing', type: 'default_marketing_parent' },\n  { id: 'marketing_asimilacion', title: 'Marketing de Asimilación', type: 'default_marketing_asimilacion', parentId: 'marketing_parent' },"
);

const marketingParentContent = `    <div>
      <div className="flex flex-col gap-3">
        <AreaItem 
          icon={Target} 
          title="Marketing de Asimilación" 
          desc="Estrategia encubierta de percepción pública" 
          onClick={() => setActivePageId('marketing_asimilacion')} 
        />
      </div>
    </div>`;

content = content.replace(
  `    <div>\n      <div className="flex flex-col gap-3">\n        {/* Aquí irán las subpáginas de marketing en el futuro */}\n      </div>\n    </div>`,
  marketingParentContent
);

content = content.replace(
  "if (type === 'default_marketing_parent') return <Megaphone size={16} />;",
  "if (type === 'default_marketing_parent') return <Megaphone size={16} />;\n    if (type === 'default_marketing_asimilacion') return <Target size={16} />;"
);

content = content.replace(
  "{activePage?.type === 'default_marketing_parent' && <MarketingParentPage setActivePageId={setActivePageId} />}",
  "{activePage?.type === 'default_marketing_parent' && <MarketingParentPage setActivePageId={setActivePageId} />}\n          {activePage?.type === 'default_marketing_asimilacion' && <MarketingAsimilacionPage setActivePageId={setActivePageId} />}"
);

fs.writeFileSync('src/App.tsx', content);
