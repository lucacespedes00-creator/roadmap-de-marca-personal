import fs from 'fs';

const content = fs.readFileSync('src/App.tsx', 'utf-8');

const marketingPage = `const MarketingParentPage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => (
  <div className="max-w-3xl mx-auto w-full pb-20 animate-in fade-in duration-300">
    <div className="flex items-center gap-2 text-[13px] text-zinc-500 mb-12 font-medium">
      <ArcadiaLogo />
      <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_parent')}>Arcadia</span>
    </div>
    
    <div className="flex items-center gap-4 mb-10">
      <div className="border border-zinc-700/50 p-3 rounded-xl text-zinc-300 bg-[#1A1A1E]">
        <Megaphone size={24} strokeWidth={1.5} />
      </div>
      <h2 className="text-4xl font-bold text-white tracking-tight">Marketing</h2>
    </div>
    
    <div className="border border-zinc-800/80 bg-[#121214] rounded-2xl p-6 mb-12">
      <p className="text-[16px] text-zinc-300 leading-[1.6]">
        Estrategias, recursos y tácticas de marketing digital.
      </p>
    </div>
    
    <div>
      <div className="flex flex-col gap-3">
        {/* Aquí irán las subpáginas de marketing en el futuro */}
      </div>
    </div>
  </div>
);

`;

const newContent = content.replace("const LinkedInParentPage = ({ setActivePageId }", marketingPage + "const LinkedInParentPage = ({ setActivePageId }");
fs.writeFileSync('src/App.tsx', newContent);
