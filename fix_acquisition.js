import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

content = content.replace(
  "{ id: 'linkedin_acquisition_parent', title: 'Acquisition', type: 'default_linkedin_acquisition_parent', },",
  "{ id: 'linkedin_acquisition_parent', title: 'Acquisition', type: 'default_linkedin_acquisition_parent' },\n  { id: 'tesis_acquisition', title: 'Acquisition', type: 'default_tesis_acquisition', section: 'tesis' },"
);

content = content.replace(
  "| 'default_linkedin_email' | 'default_marketing_parent' | 'default_marketing_asimilacion' | 'custom';",
  "| 'default_linkedin_email' | 'default_marketing_parent' | 'default_marketing_asimilacion' | 'default_tesis_acquisition' | 'custom';"
);

const parentComponent = `const TesisAcquisitionPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => (
  <div className="max-w-3xl mx-auto w-full pb-20 animate-in fade-in duration-300">
    <div className="flex items-center gap-2 text-[13px] text-zinc-500 mb-12 font-medium">
      <ArcadiaLogo />
      <span className="text-zinc-500">Tesis</span>
    </div>
    
    <div className="flex items-center gap-4 mb-10">
      <div className="border border-zinc-700/50 p-3 rounded-xl text-zinc-300 bg-[#1A1A1E]">
        <UserPlus size={24} strokeWidth={1.5} />
      </div>
      <h2 className="text-4xl font-bold text-white tracking-tight">Acquisition</h2>
    </div>
    
    <div className="border border-zinc-800/80 bg-[#121214] rounded-2xl p-6 mb-12">
      <p className="text-[16px] text-zinc-300 leading-[1.6]">
        Materiales y recursos sobre la adquisición de clientes y prospección.
      </p>
    </div>
    
    <div>
      <div className="flex flex-col gap-3">
        {/* Aquí irán las subpáginas en el futuro */}
      </div>
    </div>
  </div>
);

const LinkedInAcquisitionParentPage`;

content = content.replace("const LinkedInAcquisitionParentPage", parentComponent);

content = content.replace(
  "if (type === 'default_marketing_asimilacion') return <Target size={16} />;",
  "if (type === 'default_marketing_asimilacion') return <Target size={16} />;\n    if (type === 'default_tesis_acquisition') return <UserPlus size={16} />;"
);

content = content.replace(
  "{activePage?.type === 'default_linkedin_acquisition_parent' && <LinkedInAcquisitionParentPage setActivePageId={setActivePageId} />}",
  "{activePage?.type === 'default_linkedin_acquisition_parent' && <LinkedInAcquisitionParentPage setActivePageId={setActivePageId} />}\n          {activePage?.type === 'default_tesis_acquisition' && <TesisAcquisitionPage setActivePageId={setActivePageId} />}"
);

fs.writeFileSync('src/App.tsx', content);
