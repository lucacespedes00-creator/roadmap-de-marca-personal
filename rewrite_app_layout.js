import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Add splitPageId state
content = content.replace(
  "const [activePageId, setActivePageId] = useState('linkedin_parent');",
  "const [activePageId, setActivePageId] = useState('linkedin_parent');\n  const [splitPageId, setSplitPageId] = useState<string | null>(null);"
);

// We need to inject ArrowLeftRight into lucide-react imports if it's not there.
if (!content.includes('ArrowLeftRight')) {
  content = content.replace('import { ', 'import { ArrowLeftRight, ');
}

// Locate the Main Content Area
const mainContentStart = content.indexOf('{/* Main Content Area */}');

if (mainContentStart !== -1) {
  const beforeMain = content.substring(0, mainContentStart);
  
  const newMain = `{/* Main Content Area */}
      <div className="flex-1 flex gap-3 h-screen p-3 pl-0 overflow-hidden bg-[#131313]">
        
        {/* Left Pane (Active Page) */}
        <div className={\`flex-1 flex flex-col bg-[#171717] border border-white/5 rounded-[24px] overflow-hidden shadow-2xl transition-all duration-300 \${splitPageId ? 'hidden md:flex' : 'flex'}\`}>
          {/* Topbar */}
          <div className="h-14 flex items-center justify-between px-6 shrink-0 border-b border-transparent">
            <div className="flex items-center gap-2 text-zinc-400">
              {isMobile && (
                <button 
                  onClick={() => setSidebarOpen(true)}
                  className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-zinc-400 hover:text-white mr-2"
                >
                  <Menu size={18} />
                </button>
              )}
              {/* Optional breadcrumb or title here if you want it in the header */}
            </div>
            <div className="flex items-center gap-4 text-zinc-500">
              <MessageSquare size={16} className="cursor-pointer hover:text-zinc-300 transition-colors" />
              <Share2 size={16} className="cursor-pointer hover:text-zinc-300 transition-colors" />
              <Settings size={16} className="cursor-pointer hover:text-zinc-300 transition-colors" />
              <ArrowLeftRight size={16} className="cursor-pointer hover:text-zinc-300 transition-colors" onClick={() => {
                 // For demo, split with a default page if not already split
                 if (!splitPageId) {
                   setSplitPageId(pages.find(p => p.id !== activePageId)?.id || activePageId);
                 } else {
                   setSplitPageId(null);
                 }
              }} />
            </div>
          </div>

          {/* Scrollable Page Content */}
          <div className="flex-1 overflow-y-auto px-6 md:px-12 pt-4 pb-32 custom-scrollbar">
            {activePage?.type === 'default_linkedin_parent' && <LinkedInParentPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_marketing_parent' && <MarketingParentPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_marketing_asimilacion' && <MarketingAsimilacionPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_linkedin_acquisition_parent' && <LinkedInAcquisitionParentPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_tesis_acquisition' && <TesisAcquisitionPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_tesis_outbound_mdr_sdr' && <TesisOutboundMdrSdrPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_linkedin_insight_parent' && <LinkedInInsightParentPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_linkedin_insight_summary' && <LinkedInInsightSummaryPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_linkedin_insight_gtm' && <LinkedInInsightGtmPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_linkedin_vistas' && <LinkedInVistasPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_linkedin_outbound' && <LinkedInOutboundPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_linkedin_angulos' && <LinkedInAngulosPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_linkedin_ideas' && <LinkedInIdeasPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_linkedin_content' && <LinkedInContentPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_linkedin_email' && <LinkedInEmailPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'custom' && <CustomPageEditor page={activePage} updatePage={updatePage} />}
          </div>
        </div>

        {/* Right Pane (Split Page) */}
        {splitPageId && (() => {
          const splitPage = pages.find(p => p.id === splitPageId);
          return (
            <div className="flex-1 flex flex-col bg-[#171717] border border-white/5 rounded-[24px] overflow-hidden shadow-2xl animate-in slide-in-from-right-8 duration-300 hidden md:flex">
              {/* Topbar */}
              <div className="h-14 flex items-center justify-between px-6 shrink-0 border-b border-transparent">
                <div className="flex items-center gap-2 text-zinc-400">
                </div>
                <div className="flex items-center gap-4 text-zinc-500">
                  <MessageSquare size={16} className="cursor-pointer hover:text-zinc-300 transition-colors" />
                  <Share2 size={16} className="cursor-pointer hover:text-zinc-300 transition-colors" />
                  <Settings size={16} className="cursor-pointer hover:text-zinc-300 transition-colors" />
                  <ArrowLeftRight size={16} className="cursor-pointer hover:text-zinc-300 transition-colors" />
                  <X size={18} className="cursor-pointer hover:text-zinc-300 transition-colors ml-2" onClick={() => setSplitPageId(null)} />
                </div>
              </div>

              {/* Scrollable Page Content */}
              <div className="flex-1 overflow-y-auto px-6 md:px-12 pt-4 pb-32 custom-scrollbar">
                {splitPage?.type === 'default_linkedin_parent' && <LinkedInParentPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_marketing_parent' && <MarketingParentPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_marketing_asimilacion' && <MarketingAsimilacionPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_linkedin_acquisition_parent' && <LinkedInAcquisitionParentPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_tesis_acquisition' && <TesisAcquisitionPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_tesis_outbound_mdr_sdr' && <TesisOutboundMdrSdrPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_linkedin_insight_parent' && <LinkedInInsightParentPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_linkedin_insight_summary' && <LinkedInInsightSummaryPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_linkedin_insight_gtm' && <LinkedInInsightGtmPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_linkedin_vistas' && <LinkedInVistasPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_linkedin_outbound' && <LinkedInOutboundPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_linkedin_angulos' && <LinkedInAngulosPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_linkedin_ideas' && <LinkedInIdeasPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_linkedin_content' && <LinkedInContentPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_linkedin_email' && <LinkedInEmailPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'custom' && <CustomPageEditor page={splitPage} updatePage={updatePage} />}
              </div>
            </div>
          );
        })()}

      </div>
    </div>
  );
}
`;

  fs.writeFileSync('src/App.tsx', beforeMain + newMain);
  console.log('App layout rewritten');
} else {
  console.log('Failed to find main content boundaries');
}
