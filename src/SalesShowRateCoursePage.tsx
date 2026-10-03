import { TableOfContents } from './components/TableOfContents';
import React from 'react';
import { ExternalLink, Target, MessageSquare, Users, FileText, BarChart, TrendingUp } from 'lucide-react';
import { Video1Content } from './components/show-rate-course/Video1Content';
import { Video2Content } from './components/show-rate-course/Video2Content';
import { Video3Content } from './components/show-rate-course/Video3Content';
import { Video4Content } from './components/show-rate-course/Video4Content';
import { Video5Content } from './components/show-rate-course/Video5Content';
import { Video6Content } from './components/show-rate-course/Video6Content';

const ArcadiaLogo = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2L2 19h20L12 2zm0 4l6.5 11h-13L12 6z" />
  </svg>
);

export const SalesShowRateCoursePage = ({ setActivePageId }: { setActivePageId: (id: string) => void }) => {
  return (
    <div className="mx-auto w-full pb-20 animate-in fade-in duration-300 max-w-4xl">
      <TableOfContents sections={[
        {"id":"video-1","title":"Video 1: Fundamentos del Show Rate"},
        {"id":"video-2","title":"Video 2: Configuración del Funnel"},
        {"id":"video-3","title":"Video 3: Lead Nurture Specialist (LNS)"},
        {"id":"video-4","title":"Video 4: Plantillas de Aplicaciones"},
        {"id":"video-5","title":"Video 5: Grading y Gestión del Calendario"},
        {"id":"video-6","title":"Video 6: Seguimiento de MQLs"}
      ]} />
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
          <ArcadiaLogo />
          <span className="text-zinc-500">Boards</span>
          <span className="text-zinc-700">/</span>
          <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('sales_parent')}>Sales</span>
        </div>
      </div>

      <div className="flex items-start gap-5 mb-10">
        <div className="border border-[#D5B15B]/30 p-3.5 rounded-2xl text-[#D5B15B] bg-[#1A1A1E] mt-1 shadow-[0_0_20px_rgba(213,177,91,0.15)]">
          <BarChart size={28} strokeWidth={1.5} />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">Show Rate Course</h2>
          <p className="text-zinc-400 text-lg">Curso completo de SalesKick sobre cómo aumentar show rates y optimizar sales ops.</p>
        </div>
      </div>

      <div className="bg-[#D5B15B]/10 border border-[#D5B15B]/30 p-4 rounded-xl flex items-center gap-3 mb-16">
        <ExternalLink size={18} className="text-[#D5B15B] shrink-0" />
        <span className="text-zinc-300 text-sm">Enlace al video de capacitación: </span>
        <a href="https://www.saleskick.com/show-rate-course" target="_blank" rel="noopener noreferrer" className="text-[#D5B15B] hover:text-[#E8C94B] underline text-sm break-all">
          https://www.saleskick.com/show-rate-course
        </a>
      </div>

      <div className="space-y-16">
        <section id="video-1">
          <div className="mb-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
              <Target size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Video 1: Fundamentos del Show Rate</h3>
          </div>
          <div className="border border-[#27272A]/80 bg-[#121214] rounded-[2rem] p-4 lg:p-6 shadow-lg">
            <Video1Content />
          </div>
        </section>

        <section id="video-2">
          <div className="mb-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Video 2: Configuración del Funnel</h3>
          </div>
          <div className="border border-[#27272A]/80 bg-[#121214] rounded-[2rem] p-4 lg:p-6 shadow-lg">
            <Video2Content />
          </div>
        </section>

        <section id="video-3">
          <div className="mb-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
              <Users size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Video 3: Lead Nurture Specialist (LNS)</h3>
          </div>
          <div className="border border-[#27272A]/80 bg-[#121214] rounded-[2rem] p-4 lg:p-6 shadow-lg">
            <Video3Content />
          </div>
        </section>

        <section id="video-4">
          <div className="mb-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
              <FileText size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Video 4: Plantillas de Aplicaciones</h3>
          </div>
          <div className="border border-[#27272A]/80 bg-[#121214] rounded-[2rem] p-4 lg:p-6 shadow-lg">
            <Video4Content />
          </div>
        </section>

        <section id="video-5">
          <div className="mb-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
              <BarChart size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Video 5: Grading y Gestión del Calendario</h3>
          </div>
          <div className="border border-[#27272A]/80 bg-[#121214] rounded-[2rem] p-4 lg:p-6 shadow-lg">
            <Video5Content />
          </div>
        </section>

        <section id="video-6">
          <div className="mb-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[#D5B15B] shadow-inner">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Video 6: Seguimiento de MQLs</h3>
          </div>
          <div className="border border-[#27272A]/80 bg-[#121214] rounded-[2rem] p-4 lg:p-6 shadow-lg">
            <Video6Content />
          </div>
        </section>
      </div>
    </div>
  );
};
