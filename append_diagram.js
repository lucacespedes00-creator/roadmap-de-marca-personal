import fs from 'fs';
let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const importSearch = "Activity , ListOrdered , MessageSquare , Clock , Filter , ArrowLeft , MessageCircle , Zap , MousePointerClick , Settings , Cpu, FileText } from 'lucide-react';";
const importReplace = "Activity , ListOrdered , MessageSquare , Clock , Filter , ArrowLeft , ArrowRight , MessageCircle , Zap , MousePointerClick , Settings , Cpu, FileText } from 'lucide-react';";
content = content.replace(importSearch, importReplace);

const endSearch = `                </ul>
              </div>

            </div>
          </div>
        </section>
      </div>
        </div>
      </div>
    </div>
  );
};`;

const diagramCode = `                </ul>
              </div>

            </div>

            {/* --- DIAGRAMA --- */}
            <div className="bg-[#121214] border border-zinc-800/80 rounded-2xl p-8 shadow-xl mt-12">
              <div className="flex flex-col xl:flex-row gap-8 items-center xl:items-start justify-center">
                
                {/* Left Column */}
                <div className="bg-[#F8F6F0] rounded-3xl p-6 w-full max-w-sm shrink-0">
                  <h4 className="font-bold text-[#202020] text-[19px] mb-5 px-2">The intro — changes by situation</h4>
                  
                  <p className="text-[#555] text-[15px] font-medium mb-3 px-2">The 2 core call types</p>
                  <div className="space-y-3 mb-6">
                    <div className="bg-[#EBF3FC] border border-[#B6D4F1] rounded-xl p-3.5 text-center">
                      <p className="font-bold text-[#14477A] text-[16px] mb-0.5">Outbound call</p>
                      <p className="text-[#326292] text-[14.5px]">You dial → push into discovery</p>
                    </div>
                    <div className="bg-[#EBF3FC] border border-[#B6D4F1] rounded-xl p-3.5 text-center">
                      <p className="font-bold text-[#14477A] text-[16px] mb-0.5">Triage call</p>
                      <p className="text-[#326292] text-[14.5px]">Appt booked → they expect you → frame</p>
                    </div>
                  </div>

                  <p className="text-[#555] text-[15px] font-medium mb-3 px-2">Variations — only the intro changes</p>
                  <div className="space-y-3">
                    <div className="bg-[#EBF3FC] border border-[#B6D4F1] rounded-xl p-3.5 text-center">
                      <p className="font-bold text-[#14477A] text-[16px] mb-0.5">Buyer leads</p>
                      <p className="text-[#326292] text-[14.5px]">Customer-service frame intro</p>
                    </div>
                    <div className="bg-[#EBF3FC] border border-[#B6D4F1] rounded-xl p-3.5 text-center">
                      <p className="font-bold text-[#14477A] text-[16px] mb-0.5">Calling no-shows</p>
                      <p className="text-[#326292] text-[14.5px]">Different intro, same script after</p>
                    </div>
                    <div className="bg-[#EBF3FC] border border-[#B6D4F1] rounded-xl p-3.5 text-center">
                      <p className="font-bold text-[#14477A] text-[16px] mb-0.5">Pipeline setting (5+ days)</p>
                      <p className="text-[#326292] text-[14.5px]">Tweak intro if 21+ days old</p>
                    </div>
                    <div className="bg-[#EBF3FC] border border-[#B6D4F1] rounded-xl p-3.5 text-center">
                      <p className="font-bold text-[#14477A] text-[16px] mb-0.5">Implementation call</p>
                      <p className="text-[#326292] text-[14.5px] leading-tight">Buyer funnel → CS frame → closer<br/>(covered in a separate training)</p>
                    </div>
                  </div>
                </div>

                {/* Center Arrow */}
                <div className="flex xl:flex-col items-center justify-center text-zinc-500 xl:w-28 shrink-0 hidden md:flex xl:mt-48">
                  <ArrowRight className="xl:hidden w-8 h-8" />
                  <div className="hidden xl:block text-center relative -left-4">
                    <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-600">
                      <path d="M0 80 C 40 80, 60 20, 95 20" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path d="M85 10 L 97 20 L 85 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="text-[13px] text-zinc-500 mt-2 font-medium">all paths merge<br/>at discovery →</p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="bg-[#F8F6F0] rounded-3xl p-6 w-full max-w-sm shrink-0 xl:mt-24">
                  <h4 className="font-bold text-[#202020] text-[19px] mb-6 px-2">The core call — identical every time</h4>
                  
                  <div className="space-y-1.5">
                    <div className="bg-[#E8F6ED] border border-[#A6DDB9] rounded-xl p-4 text-center">
                      <p className="font-bold text-[#175E33] text-[17px] mb-0.5">Discovery</p>
                      <p className="text-[#2A7545] text-[15px]">Dig into their situation</p>
                    </div>
                    <div className="flex justify-center text-[#A6DDB9]">
                      <ArrowDown size={24} strokeWidth={2.5} />
                    </div>
                    <div className="bg-[#E8F6ED] border border-[#A6DDB9] rounded-xl p-4 text-center">
                      <p className="font-bold text-[#175E33] text-[17px] mb-0.5">Transition + pitch</p>
                      <p className="text-[#2A7545] text-[15px]">Pitch booking the call</p>
                    </div>
                    <div className="flex justify-center text-[#A6DDB9]">
                      <ArrowDown size={24} strokeWidth={2.5} />
                    </div>
                    <div className="bg-[#E8F6ED] border border-[#A6DDB9] rounded-xl p-4 text-center">
                      <p className="font-bold text-[#175E33] text-[17px] mb-0.5">Qualify (if necessary)</p>
                      <p className="text-[#2A7545] text-[15px]">Only when needed</p>
                    </div>
                    <div className="flex justify-center text-[#A6DDB9]">
                      <ArrowDown size={24} strokeWidth={2.5} />
                    </div>
                    <div className="bg-[#E8F6ED] border border-[#A6DDB9] rounded-xl p-4 text-center">
                      <p className="font-bold text-[#175E33] text-[17px] mb-0.5">Tie down the show-up</p>
                      <p className="text-[#2A7545] text-[15px]">Lock the appointment</p>
                    </div>
                  </div>
                  
                  <p className="text-[#666] text-center text-[15px] mt-6 font-medium">Same backbone for all 6 entry points</p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
        </div>
      </div>
    </div>
  );
};`;
content = content.replace(endSearch, diagramCode);
fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);
