import React, { useState, useEffect } from 'react';
import { emailTemplates } from './emailTemplates';
import { LinkedInInsightGtmPage } from './LinkedInInsightGtmPage';
import { MarketingAsimilacionPage } from './MarketingAsimilacionPage';
import { TesisOutboundMdrSdrPage } from './TesisOutboundMdrSdrPage';
import { TesisJeremyAdsPage } from './TesisJeremyAdsPage';
import { TesisKeepAdsProfitablePage } from './TesisKeepAdsProfitablePage';
import { TesisPixelConditioningPage } from './TesisPixelConditioningPage';
import { Tesis3CsPage } from './Tesis3CsPage';
import { TesisTrentConsultingPage } from './TesisTrentConsultingPage';
import { TesisScaleMetaAdsPage } from './TesisScaleMetaAdsPage';
import { ModelIf100kPage } from './ModelIf100kPage';
import { Sales16MPage } from './Sales16MPage';
import { SalesShowRatePage } from './SalesShowRatePage';
import { SalesShowRateCoursePage } from './SalesShowRateCoursePage';
import { CleansEditorPage } from './CleansEditorPage';
import { 
  Home, Maximize2, ArrowLeftRight, SlidersHorizontal, LayoutGrid, Database, 
  Video, Phone, Diamond, Users, AlignLeft, 
  CheckSquare, PieChart, Plus, FileText, Menu, PanelLeft, PanelLeftClose, PanelRightOpen, X, Trash2, ChevronDown,
  Lightbulb, Target, Settings, Search, MessageSquare, Bot, 
  Zap, Instagram, TrendingUp, CheckCircle2, ListOrdered,
  PenTool, Layers, Copy, ArrowRight, ArrowDown, Mic, Compass, 
  Volume2, BarChart, Columns, MessageCircle, FileSearch, Megaphone, UserPlus, Magnet, Link as LinkIcon, ExternalLink, LineChart
, Mail, Calendar, Clock, AlertCircle, PlayCircle, Send, Shield, Smartphone, ArrowUpRight, Briefcase, Share2, Brain, Globe, Star, ShieldAlert, Key, MonitorPlay, CalendarDays, RefreshCcw, DollarSign } from 'lucide-react';

const ArcadiaLogo = ({ className = "w-4 h-4" }) => (

  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15.41 3.53H19.78L12.35 18.06H7.98L15.41 3.53Z" />
    <path d="M6.02 12.37H10.39L8.21 16.65H3.84L6.02 12.37Z" />
  </svg>
);

type Page = {
  id: string;
  title: string;
  type: 'default_plan' | 'default_etapa' | 'default_contenido' | 'default_linkedin_ideas' | 'default_linkedin_content' | 'default_linkedin_parent' | 'default_linkedin_angulos' | 'default_linkedin_acquisition_parent' | 'default_linkedin_vistas' | 'default_linkedin_outbound' | 'default_linkedin_insight_parent' | 'default_linkedin_insight_summary' | 'default_linkedin_insight_gtm' | 'default_linkedin_email' | 'default_marketing_parent' | 'default_marketing_asimilacion' | 'default_tesis_acquisition' | 'default_tesis_outbound_mdr_sdr' | 'default_tesis_jeremy_ads' | 'default_tesis_keep_ads_profitable' | 'default_tesis_pixel_conditioning' | 'default_tesis_3cs' | 'default_tesis_trent_consulting' | 'default_tesis_scale_meta_ads' | 'default_ads_parent' | 'default_model_parent' | 'default_model_if100k' | 'default_sales_parent' | 'default_sales_16m' | 'default_sales_showrate' | 'default_sales_showrate_course' | 'custom' | 'clean';
  content?: string;
  parentId?: string;
  section?: 'tesis' | 'aprendizajes' | 'cleans';
  cleanBlocks?: any[];
};

const defaultPages: Page[] = [
  { id: 'tesis_acquisition', title: 'Acquisition', type: 'default_tesis_acquisition', section: 'tesis' },
  { id: 'tesis_outbound_mdr_sdr', title: 'Modelos MDR vs. SDR', type: 'default_tesis_outbound_mdr_sdr', parentId: 'tesis_acquisition', section: 'tesis' },
  { id: 'ads_parent', title: 'Ads', type: 'default_ads_parent', section: 'aprendizajes' },
  { id: 'tesis_jeremy_ads', title: 'The Most Valuable Meta Ads Training', type: 'default_tesis_jeremy_ads', parentId: 'ads_parent', section: 'aprendizajes' },
  { id: 'tesis_keep_ads_profitable', title: 'The BEST Strategy To Keep Ads Profitable [FOREVER]', type: 'default_tesis_keep_ads_profitable', parentId: 'ads_parent', section: 'aprendizajes' },
  { id: 'tesis_pixel_conditioning', title: 'How To Turn Paid Ads Into a Money-Printing Machine (Pixel Conditioning)', type: 'default_tesis_pixel_conditioning', parentId: 'ads_parent', section: 'aprendizajes' },
  { id: 'tesis_3cs', title: 'Las 3 C\'s', type: 'default_tesis_3cs', parentId: 'ads_parent', section: 'aprendizajes' },
  { id: 'tesis_trent_consulting', title: 'Consultoría de negocio a Trent (Regathered AI)', type: 'default_tesis_trent_consulting', parentId: 'ads_parent', section: 'aprendizajes' },
  { id: 'tesis_scale_meta_ads', title: 'How to Scale Meta Ads without Wrecking your ROAS', type: 'default_tesis_scale_meta_ads', parentId: 'ads_parent', section: 'aprendizajes' },
  { id: 'model_parent', title: 'Model', type: 'default_model_parent', section: 'aprendizajes' },
  { id: 'model_if100k', title: 'If I Had NOTHING, Here\'s How I\'d Make $100,000 in 3 Months', type: 'default_model_if100k', parentId: 'model_parent', section: 'aprendizajes' },
  { id: 'sales_parent', title: 'Sales', type: 'default_sales_parent', section: 'aprendizajes' },
  { id: 'sales_16m', title: '$16.000.000 en conocimiento de ventas en 36 minutos', type: 'default_sales_16m', parentId: 'sales_parent', section: 'aprendizajes' },
  { id: 'sales_showrate', title: 'Cómo arreglar tu show rate: resumen completo', type: 'default_sales_showrate', parentId: 'sales_parent', section: 'aprendizajes' },
  { id: 'sales_showrate_course', title: 'Show Rate Course', type: 'default_sales_showrate_course', parentId: 'sales_parent', section: 'aprendizajes' },
];

const AreaItem = ({ icon: Icon, title, desc, active, onClick, onSplit }: any) => (
  <div onClick={onClick} className={`group flex items-center justify-between p-4 rounded-2xl border transition-colors cursor-pointer ${active ? 'border-[#3F3F46]/60 bg-[#1A1A1E]' : 'border-transparent hover:border-[#3F3F46]/40 hover:bg-[#1A1A1E]/50'}`}>
    <div className="flex items-center gap-4">
      <div className={active ? "text-white" : "text-zinc-500"}>
        <Icon size={20} strokeWidth={1.5} />
      </div>
      <div className="flex flex-col gap-0.5">
        <span className={`text-[15px] font-semibold ${active ? 'text-white' : 'text-zinc-200'}`}>{title}</span>
        <span className="text-[13px] text-zinc-500">{desc}</span>
      </div>
    </div>
    {onSplit && (
      <div 
        className="opacity-0 group-hover:opacity-100 p-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-all shrink-0"
        onClick={(e) => {
          e.stopPropagation();
          onSplit();
        }}
        title="Open in split view"
      >
        <PanelRightOpen size={18} />
      </div>
    )}
  </div>
);

const MarketingParentPage = ({ setActivePageId, setSplitPageId }: { setActivePageId: (id: string) => void, setSplitPageId?: (id: string) => void }) => (
  <div className="max-w-4xl mx-auto w-full pb-20 animate-in fade-in duration-300">
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
        <AreaItem 
          icon={Target} 
          title="Marketing de Asimilación" 
          desc="Estrategia encubierta de percepción pública" 
          onClick={() => setActivePageId('marketing_asimilacion')} 
         onSplit={() => setSplitPageId && setSplitPageId('marketing_asimilacion')} />
      </div>
    </div>
  </div>
);

const LinkedInParentPage = ({ setActivePageId, setSplitPageId }: { setActivePageId: (id: string) => void, setSplitPageId?: (id: string) => void }) => (
  <div className="max-w-4xl mx-auto w-full pb-20 animate-in fade-in duration-300">
    <div className="flex items-center gap-2 text-[13px] text-zinc-500 mb-12 font-medium">
      <ArcadiaLogo />
      <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_parent')}>Arcadia</span>
    </div>
    
    <div className="flex items-center gap-4 mb-10">
      <div className="border border-zinc-700/50 p-3 rounded-xl text-zinc-300 bg-[#1A1A1E]">
        <Layers size={24} strokeWidth={1.5} />
      </div>
      <h2 className="text-4xl font-bold text-white tracking-tight">Content</h2>
    </div>
    
    <div className="border border-zinc-800/80 bg-[#121214] rounded-2xl p-6 mb-12">
      <p className="text-[16px] text-zinc-300 leading-[1.6]">
        Materiales y recursos sobre la creación de contenido orgánico y automatizado en LinkedIn.
      </p>
    </div>
    
    <div>
      <div className="flex flex-col gap-3">
        <AreaItem 
          icon={Target} 
          title="Ángulos de Venta" 
          desc="Cómo hacer ángulos de venta de alta conversión" 
          onClick={() => setActivePageId('linkedin_angulos')} 
         onSplit={() => setSplitPageId && setSplitPageId('linkedin_angulos')} />
        <AreaItem 
          icon={Lightbulb} 
          title="Ideas LinkedIn" 
          desc="Sistema de generación de ideas para contenido" 
          onClick={() => setActivePageId('linkedin_ideas')} 
         onSplit={() => setSplitPageId && setSplitPageId('linkedin_ideas')} />
        <AreaItem 
          icon={PenTool} 
          title="LinkedIn Playbook" 
          desc="Estrategias de copywriting y publicación" 
          onClick={() => setActivePageId('linkedin_content')} 
         onSplit={() => setSplitPageId && setSplitPageId('linkedin_content')} />
      </div>
    </div>
  </div>
);

const AdsParentPage = ({ setActivePageId, setSplitPageId }: { setActivePageId: (id: string) => void, setSplitPageId?: (id: string) => void }) => (
  <div className="max-w-4xl mx-auto w-full pb-20 animate-in fade-in duration-300">
    <div className="flex items-center gap-2 text-[13px] text-zinc-500 mb-12 font-medium">
      <ArcadiaLogo />
      <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('ads_parent')}>Arcadia</span>
    </div>
    
    <div className="flex items-center gap-4 mb-10">
      <div className="border border-zinc-700/50 p-3 rounded-xl text-zinc-300 bg-[#1A1A1E]">
        <Target size={24} strokeWidth={1.5} />
      </div>
      <h2 className="text-4xl font-bold text-white tracking-tight">Ads</h2>
    </div>
    
    <div className="border border-zinc-800/80 bg-[#121214] rounded-2xl p-6 mb-12">
      <p className="text-[16px] text-zinc-300 leading-[1.6]">
        Materiales y recursos sobre publicidad pagada y estrategias de Meta Ads.
      </p>
    </div>
    
    <div>
      <div className="flex flex-col gap-3">
        <AreaItem 
          icon={Target} 
          title="The Most Valuable Meta Ads Training" 
          desc="Resumen completo: The Most Valuable Meta Ads Training (Jeremy)" 
          onClick={() => setActivePageId('tesis_jeremy_ads')} 
         onSplit={() => setSplitPageId && setSplitPageId('tesis_jeremy_ads')} />
        <AreaItem 
          icon={Target} 
          title="The BEST Strategy To Keep Ads Profitable [FOREVER]" 
          desc="Sistema de 3 buckets y 4 protocolos para evitar la caída de calidad." 
          onClick={() => setActivePageId('tesis_keep_ads_profitable')} 
         onSplit={() => setSplitPageId && setSplitPageId('tesis_keep_ads_profitable')} />
        <AreaItem 
          icon={Target} 
          title="How To Turn Paid Ads Into a Money-Printing Machine (Pixel Conditioning)" 
          desc="Cómo condicionar o recondicionar el píxel para atraer gente calificada." 
          onClick={() => setActivePageId('tesis_pixel_conditioning')} 
         onSplit={() => setSplitPageId && setSplitPageId('tesis_pixel_conditioning')} />
        <AreaItem 
          icon={Target} 
          title="Las 3 C's" 
          desc="Clicks, Conversions y Close: el esqueleto del sistema de generación de leads." 
          onClick={() => setActivePageId('tesis_3cs')} 
         onSplit={() => setSplitPageId && setSplitPageId('tesis_3cs')} />
        <AreaItem 
          icon={Target} 
          title="Consultoría de negocio a Trent (Regathered AI)" 
          desc="Análisis en vivo de un negocio de IA con 100K+/mes y plan para llegar al millón." 
          onClick={() => setActivePageId('tesis_trent_consulting')} 
         onSplit={() => setSplitPageId && setSplitPageId('tesis_trent_consulting')} />
        <AreaItem 
          icon={Target} 
          title="How to Scale Meta Ads without Wrecking your ROAS" 
          desc="Guía en 5 pasos para escalar presupuesto manteniendo la rentabilidad." 
          onClick={() => setActivePageId('tesis_scale_meta_ads')} 
         onSplit={() => setSplitPageId && setSplitPageId('tesis_scale_meta_ads')} />
      </div>
    </div>
  </div>
);

const ModelParentPage = ({ setActivePageId, setSplitPageId }: { setActivePageId: (id: string) => void, setSplitPageId?: (id: string) => void }) => (
  <div className="max-w-4xl mx-auto w-full pb-20 animate-in fade-in duration-300">
    <div className="flex items-center gap-2 text-[13px] text-zinc-500 mb-12 font-medium">
      <ArcadiaLogo />
      <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('model_parent')}>Arcadia</span>
    </div>
    
    <div className="flex items-center gap-4 mb-10">
      <div className="border border-zinc-700/50 p-3 rounded-xl text-zinc-300 bg-[#1A1A1E]">
        <Brain size={24} strokeWidth={1.5} />
      </div>
      <h2 className="text-4xl font-bold text-white tracking-tight">Model</h2>
    </div>
    
    <div className="border border-zinc-800/80 bg-[#121214] rounded-2xl p-6 mb-12">
      <p className="text-[16px] text-zinc-300 leading-[1.6]">
        Modelos de negocio, frameworks de lanzamiento y playbooks de escala para agencias y consultorías.
      </p>
    </div>
    
    <div>
      <div className="flex flex-col gap-3">
        <AreaItem 
          icon={DollarSign} 
          title="If I Had NOTHING, Here's How I'd Make $100,000 in 3 Months" 
          desc="Playbook completo para lanzar y escalar a $10K-$30K/mes en 90 días o menos." 
          onClick={() => setActivePageId('model_if100k')} 
         onSplit={() => setSplitPageId && setSplitPageId('model_if100k')} />
      </div>
    </div>
  </div>
);

const SalesParentPage = ({ setActivePageId, setSplitPageId }: { setActivePageId: (id: string) => void, setSplitPageId?: (id: string) => void }) => (
  <div className="max-w-4xl mx-auto w-full pb-20 animate-in fade-in duration-300">
    <div className="flex items-center gap-2 text-[13px] text-zinc-500 mb-12 font-medium">
      <ArcadiaLogo />
      <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('sales_parent')}>Arcadia</span>
    </div>
    
    <div className="flex items-center gap-4 mb-10">
      <div className="border border-zinc-700/50 p-3 rounded-xl text-zinc-300 bg-[#1A1A1E]">
        <Target size={24} strokeWidth={1.5} />
      </div>
      <h2 className="text-4xl font-bold text-white tracking-tight">Sales</h2>
    </div>
    
    <div className="border border-zinc-800/80 bg-[#121214] rounded-2xl p-6 mb-12">
      <p className="text-[16px] text-zinc-300 leading-[1.6]">
        Principios, tácticas y playbooks para dominar las ventas, cerrar tratos de alto valor y escalar.
      </p>
    </div>
    
    <div>
      <div className="flex flex-col gap-3">
        <AreaItem 
          icon={DollarSign} 
          title="$16.000.000 en conocimiento de ventas en 36 minutos" 
          desc="El playbook definitivo de Serge para diagnosticar dolores y cobrar high-ticket." 
          onClick={() => setActivePageId('sales_16m')}
         onSplit={() => setSplitPageId && setSplitPageId('sales_16m')} />
        <AreaItem 
          icon={Phone} 
          title="Cómo arreglar tu show rate: resumen completo" 
          desc="12 tácticas para pasar de 40% a 80% de show rate: booking window, LNS, application grading y más." 
          onClick={() => setActivePageId('sales_showrate')}
         onSplit={() => setSplitPageId && setSplitPageId('sales_showrate')} />
        <AreaItem 
          icon={BarChart} 
          title="Show Rate Course (Formato Documento)" 
          desc="El curso completo de SalesKick sobre c�mo aumentar el show rate, documentado paso a paso." 
          onClick={() => setActivePageId('sales_showrate_course')}
         onSplit={() => setSplitPageId && setSplitPageId('sales_showrate_course')} />
      </div>
    </div>
  </div>
);

const TesisAcquisitionPage = ({ setActivePageId, setSplitPageId }: { setActivePageId: (id: string) => void, setSplitPageId?: (id: string) => void }) => (
  <div className="max-w-4xl mx-auto w-full pb-20 animate-in fade-in duration-300">
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
        <AreaItem 
          icon={Briefcase} 
          title="Modelos MDR vs. SDR" 
          desc="Definición y comparación de equipos de prospección." 
          onClick={() => setActivePageId('tesis_outbound_mdr_sdr')} 
         onSplit={() => setSplitPageId && setSplitPageId('tesis_outbound_mdr_sdr')} />
      </div>
    </div>
  </div>
);

const LinkedInAcquisitionParentPage = ({ setActivePageId, setSplitPageId }: { setActivePageId: (id: string) => void, setSplitPageId?: (id: string) => void }) => (
  <div className="max-w-4xl mx-auto w-full pb-20 animate-in fade-in duration-300">
    <div className="flex items-center gap-2 text-[13px] text-zinc-500 mb-12 font-medium">
      <ArcadiaLogo />
      <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_parent')}>Arcadia</span>
    </div>
    
    <div className="flex items-center gap-4 mb-10">
      <div className="border border-zinc-700/50 p-3 rounded-xl text-zinc-300 bg-[#1A1A1E]">
        <UserPlus size={24} strokeWidth={1.5} />
      </div>
      <h2 className="text-4xl font-bold text-white tracking-tight">Acquisition</h2>
    </div>
    
    <div className="border border-zinc-800/80 bg-[#121214] rounded-2xl p-6 mb-12">
      <p className="text-[16px] text-zinc-300 leading-[1.6]">
        Materiales y recursos sobre la adquisición de clientes y prospección en LinkedIn.
      </p>
    </div>
    
    <div>
      <div className="flex flex-col gap-3">
        <AreaItem 
          icon={Magnet} 
          title="Sistema de Señales" 
          desc="Convertir intención pasiva en pipeline puntuado" 
          onClick={() => setActivePageId('linkedin_vistas')} 
         onSplit={() => setSplitPageId && setSplitPageId('linkedin_vistas')} />
        <AreaItem 
          icon={MessageSquare} 
          title="Outbound y LinkedIn" 
          desc="Cómo construí un negocio de $35K/Mes con 20 DMs por día" 
          onClick={() => setActivePageId('linkedin_outbound')} 
         onSplit={() => setSplitPageId && setSplitPageId('linkedin_outbound')} />
        <AreaItem 
          icon={Mail} 
          title="Sistema de Email" 
          desc="Estrategia para convertir listas de correos en clientes" 
          onClick={() => setActivePageId('linkedin_email')} 
         onSplit={() => setSplitPageId && setSplitPageId('linkedin_email')} />
      </div>
    </div>
  </div>
);

const LinkedInInsightParentPage = ({ setActivePageId, setSplitPageId }: { setActivePageId: (id: string) => void, setSplitPageId?: (id: string) => void }) => (
  <div className="max-w-4xl mx-auto w-full pb-20 animate-in fade-in duration-300">
    <div className="flex items-center gap-2 text-[13px] text-zinc-500 mb-12 font-medium">
      <ArcadiaLogo />
      <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_parent')}>Arcadia</span>
    </div>
    
    <div className="flex items-center gap-4 mb-10">
      <div className="border border-zinc-700/50 p-3 rounded-xl text-zinc-300 bg-[#1A1A1E]">
        <LineChart size={24} strokeWidth={1.5} />
      </div>
      <h2 className="text-4xl font-bold text-white tracking-tight">Insight</h2>
    </div>
    
    <div className="border border-zinc-800/80 bg-[#121214] rounded-2xl p-6 mb-12">
      <p className="text-[16px] text-zinc-300 leading-[1.6]">
        Análisis, métricas y comprensión profunda del comportamiento en LinkedIn.
      </p>
    </div>
    
    <div>
      <div className="flex flex-col gap-3">
        <AreaItem 
          icon={PlayCircle} 
          title="Dominar el Scroll" 
          desc="Estrategia para adquirir clientes con contenido y maximizar confianza" 
          onClick={() => setActivePageId('linkedin_insight_summary')} 
         onSplit={() => setSplitPageId && setSplitPageId('linkedin_insight_summary')} />
        <AreaItem 
          icon={BarChart} 
          title="Arquitectura GTM" 
          desc="Estrategia Go to Market para B2B" 
          onClick={() => setActivePageId('linkedin_insight_gtm')} 
         onSplit={() => setSplitPageId && setSplitPageId('linkedin_insight_gtm')} />
      </div>
    </div>
  </div>
);


const LinkedInInsightSummaryPage = ({ setActivePageId, setSplitPageId }: { setActivePageId: (id: string) => void, setSplitPageId?: (id: string) => void }) => {
  const [isSummary, setIsSummary] = useState(false);

  return (
    <div className={`mx-auto w-full pb-20 animate-in fade-in duration-300 max-w-4xl`}>
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
          <ArcadiaLogo />
          <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_parent')}>Arcadia</span>
          <span className="text-zinc-700">/</span>
          <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_insight_parent')}>Insight</span>
        </div>
        
        <div className="flex items-center bg-[#1A1A1E] rounded-lg p-1 border border-zinc-800">
          <button 
            onClick={() => setIsSummary(false)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${!isSummary ? 'bg-[#27272A] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            Completo
          </button>
          <button 
            onClick={() => setIsSummary(true)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${isSummary ? 'bg-[#27272A] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            Resumido
          </button>
        </div>
      </div>
      
      <div className="flex items-start gap-5 mb-10">
        <div className="border border-[#D5B15B]/30 p-3.5 rounded-2xl text-[#D5B15B] bg-[#1A1A1E] mt-1 shadow-[0_0_20px_rgba(213,177,91,0.15)]">
          <PlayCircle size={28} strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white tracking-tight mb-3">Dominar el Scroll</h1>
          <p className="text-[17px] text-zinc-400 leading-relaxed max-w-2xl">
            Resumen completo del video, organizado por los ejes principales que desarrolla.
          </p>
        </div>
      </div>

      {/* Video Embed */}
      <div className="w-full aspect-video rounded-3xl overflow-hidden border border-zinc-800/80 shadow-2xl mb-10 bg-[#121214]">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/K6NxVh5N_8E" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      <div className="space-y-8">
        <section className="bg-[#121214] border border-zinc-800/80 rounded-[1.5rem] p-8 relative overflow-hidden group hover:border-[#D5B15B]/30 transition-colors">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D5B15B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
            <Target className="text-[#D5B15B]" size={22} />
            La promesa central
          </h3>
          <div className="space-y-4 relative z-10 text-[15px] text-zinc-300 leading-relaxed">
            <p>
              {isSummary ? `Duplicar citas en 90 días y reducir CAC a la mitad dominando el scroll.` : `El presentador ofrece duplicar el volumen de citas/appointments de un negocio en 90 días y, al mismo tiempo, reducir a la mitad el costo de adquisición de clientes. La condición es un solo objetivo: "dominar el scroll" (own the scroll), bajo una modalidad de "no pagás si no funciona".`}
            </p>
            {!isSummary && (
              <p>
                Aclara que esto es solo para negocios que ya facturan en serio: que ya tengan un proceso de ventas probado, que ya inviertan en marketing y publicidad, y que tengan capacidad para absorber 10 o más clientes nuevos por mes. Si no cumplís esos requisitos, dice explícitamente que su servicio no es para vos todavía.
              </p>
            )}
            {isSummary && (
               <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-4">
                  <p className="font-semibold text-white text-sm mb-1">Requisitos:</p>
                  <p className="text-zinc-400 text-sm">Proceso de ventas probado, inversión en Ads, capacidad para 10+ clientes/mes.</p>
               </div>
            )}
          </div>
        </section>

        <section className={`grid ${isSummary ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-6`}>
          <div className="bg-[#121214] border border-zinc-800/80 rounded-[1.5rem] p-8 group hover:border-[#D5B15B]/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <BarChart className="text-[#D5B15B]" size={22} />
              Las dos únicas métricas que importan
            </h3>
            <p className="text-[15px] text-zinc-300 mb-6">
              {isSummary ? `Solo hay dos números relevantes en cualquier negocio:` : `Según el presentador, en cualquier negocio solo hay dos números relevantes:`}
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1A1A1E] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0 mt-0.5">1</div>
                <p className="text-[15px] text-zinc-300">El costo de adquirir un cliente.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1A1A1E] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0 mt-0.5">2</div>
                <p className="text-[15px] text-zinc-300">El valor de ese cliente a lo largo del tiempo (lifetime value).</p>
              </div>
            </div>
            <p className="text-[15px] text-zinc-300">
              {isSummary ? `El CEO debe maximizar LTV y minimizar CAC. La clave para ambas: la confianza del lead antes de la llamada.` : `El trabajo del CEO es maximizar el segundo número y minimizar el primero. Y sostiene que hay una sola variable que impacta ambas métricas simultáneamente: el nivel de confianza que un lead tiene en la marca antes de llegar a una llamada de ventas.`}
            </p>
          </div>

          <div className="bg-[#121214] border border-zinc-800/80 rounded-[1.5rem] p-8 group hover:border-[#D5B15B]/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="text-[#D5B15B]" size={22} />
              El dato que respalda la teoría
            </h3>
            <div className="flex flex-col h-full justify-center pb-6">
              <div className="text-6xl font-bold text-white mb-4">26x</div>
              <p className="text-[15px] text-zinc-300 leading-relaxed">
                {isSummary 
                  ? `El efectivo cobrado por cita fue 26x mayor cuando el prospecto ya conocía la marca (tras analizar 462 llamadas).` 
                  : `Analizaron 462 llamadas de ventas propias y encontraron que el efectivo cobrado por cita agendada era 26 veces mayor cuando el prospecto ya conocía la marca, comparado con un lead de la misma calidad, mismo calendario, mismo producto, pero que no tenía familiaridad ni confianza previa.`}
              </p>
              {!isSummary && (
                <p className="text-[15px] text-zinc-300 leading-relaxed mt-4">
                  Esto lo lleva a concluir que no hay otra palanca en un negocio que multiplique tanto el ingreso con los mismos leads.
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="bg-[#121214] border border-zinc-800/80 rounded-[1.5rem] p-8 group hover:border-[#D5B15B]/30 transition-colors">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <Clock className="text-[#D5B15B]" size={22} />
            Por qué esto funciona ahora (y no antes)
          </h3>
          {!isSummary && <p className="text-[15px] text-zinc-300 mb-6">El presentador da tres razones:</p>}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1A1A1E] rounded-2xl p-6 border border-zinc-800">
              <div className="flex items-center gap-3 mb-3">
                 <div className="w-8 h-8 rounded-full bg-[#121214] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0">1</div>
                 <h4 className="font-bold text-white">Los algoritmos cambiaron radicalmente</h4>
              </div>
              <p className="text-[14.5px] text-zinc-400 leading-relaxed">
                {isSummary ? `El 'tribal model' de Meta 'lee la mente' sugiriendo contenido exacto a la persona exacta.` : `menciona un modelo de Meta ("tribal model") entrenado con miles de escaneos cerebrales para entender cómo el cerebro procesa estímulos, lo que permite sugerir el contenido exacto a la persona exacta. Según él, esto hace que las plataformas "lean la mente" del usuario.`}
              </p>
            </div>
            
            <div className="bg-[#1A1A1E] rounded-2xl p-6 border border-zinc-800">
              <div className="flex items-center gap-3 mb-3">
                 <div className="w-8 h-8 rounded-full bg-[#121214] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0">2</div>
                 <h4 className="font-bold text-white">El consumo de contenido es masivo</h4>
              </div>
              <p className="text-[14.5px] text-zinc-400 leading-relaxed">
                {isSummary ? `Más del 60% de las 6hs diarias online se dedican a hacer scroll.` : `más del 60% de las 6 horas diarias que la gente pasa online se dedica a hacer scroll.`}
              </p>
            </div>
            
            <div className="bg-[#1A1A1E] rounded-2xl p-6 border border-zinc-800">
              <div className="flex items-center gap-3 mb-3">
                 <div className="w-8 h-8 rounded-full bg-[#121214] border border-[#D5B15B]/50 text-[#D5B15B] flex items-center justify-center text-sm font-bold shrink-0">3</div>
                 <h4 className="font-bold text-[#D5B15B]">Cambió la lógica del contenido</h4>
              </div>
              <p className="text-[14.5px] text-zinc-400 leading-relaxed">
                {isSummary ? `Tenés 1.7 seg. para captar atención. No se busca viralidad en 1 video, sino 'inundar el scroll' para exposición repetida.` : `ya no importa un solo video espectacular, porque hoy solo tenés 1.7 segundos para captar la atención. Por eso la estrategia ganadora es "inundar el scroll" (flood the scroll): no busca que cada pieza se vuelva viral, sino que el prospecto ideal te encuentre cada vez que hace scroll. Esto genera confianza por mera exposición repetida, sin que la persona lo decida conscientemente.`}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#121214] border border-zinc-800/80 rounded-[1.5rem] p-8 group hover:border-[#D5B15B]/30 transition-colors">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <Globe className="text-[#D5B15B]" size={22} />
            Ejemplos de "arbitraje" en distintas industrias
          </h3>
          <p className="text-[15px] text-zinc-300 mb-6">
            {isSummary ? `Negocios chicos logrando alcances enormes:` : `Da varios casos de negocios chicos con pocos seguidores que logran alcances enormes:`}
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
               <div className="w-1.5 h-1.5 rounded-full bg-[#D5B15B] shrink-0"></div>
               <p className="text-[14.5px] text-zinc-300">Una empresa de techos (roofing) con menos de 1.000 seguidores: un reel con 150.000 vistas.</p>
            </div>
            <div className="flex items-center gap-3 bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
               <div className="w-1.5 h-1.5 rounded-full bg-[#D5B15B] shrink-0"></div>
               <p className="text-[14.5px] text-zinc-300">Una constructora con 4.000 seguidores: 60.000 vistas.</p>
            </div>
            <div className="flex items-center gap-3 bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
               <div className="w-1.5 h-1.5 rounded-full bg-[#D5B15B] shrink-0"></div>
               <p className="text-[14.5px] text-zinc-300">Una agencia con 11.000 seguidores: 6 millones de vistas.</p>
            </div>
            <div className="flex items-center gap-3 bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
               <div className="w-1.5 h-1.5 rounded-full bg-[#D5B15B] shrink-0"></div>
               <p className="text-[14.5px] text-zinc-300">Estudios jurídicos y consultorios odontológicos con miles de vistas partiendo de pocos seguidores.</p>
            </div>
          </div>
          
          <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl p-6">
             <h4 className="font-bold text-white mb-3">Caso: Empresa de renovaciones/remodelaciones</h4>
             <p className="text-[15px] text-zinc-300 leading-relaxed">
               {isSummary 
                  ? `Cuenta "faceless" generada con IA. 60k seguidores en 6 meses con videos de millones de vistas. El algoritmo dirigió leads a la zona correcta (Canadá).` 
                  : `El caso más desarrollado es el de una empresa de renovaciones/remodelaciones: en vez de invertir en publicidad paga, crearon una cuenta de Instagram con videos "faceless" (sin mostrar la cara) generados con IA, mostrando las renovaciones. En 6 meses llegaron a casi 60.000 seguidores, con videos de 1, 4 y hasta 6 millones de vistas sin gastar en ads. En los comentarios, gente de otras zonas (Ontario, Edmonton) preguntaba si podían hacer el trabajo en su área, y destaca que el algoritmo igual dirigía el contenido viral hacia leads de calidad en la zona correcta (Canadá).`}
             </p>
          </div>
        </section>

        <section className="bg-[#121214] border border-zinc-800/80 rounded-[1.5rem] p-8 group hover:border-[#D5B15B]/30 transition-colors">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <ShieldAlert className="text-[#D5B15B]" size={22} />
              El problema que identifica en la industria
            </h3>
            <p className="text-[15px] text-zinc-300 leading-relaxed mb-6">
              {isSummary ? `Referentes como Hormozi o GaryVee no venden algo único, sino que poseen la atención y publican a diario.` : `Menciona referentes como Alex Hormozi, Ryan Serhant, Codie Sanchez, Gary Vaynerchuk y Patrick Bet-David como ejemplos de personas que no venden algo único (coaching, real estate, agencias), sino que su ventaja real es que "poseen la atención" y tratan el contenido como su activo más valioso, publicando todos los días.`}
            </p>
            <p className="text-[15px] text-zinc-300 mb-4">
              {isSummary ? `Los 2 caminos tradicionales son insostenibles:` : `Plantea que hasta ahora un negocio solo tenía dos caminos para lograr esto:`}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1A1A1E] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0 mt-0.5">1</div>
                <p className="text-[14.5px] text-zinc-300">Armar un departamento de contenido interno, gastando un cuarto de millón de dólares o más por mes (como hace Hormozi), con editores, camarógrafos, etc.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1A1A1E] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0 mt-0.5">2</div>
                <p className="text-[14.5px] text-zinc-300">Que el dueño del negocio se convierta en creador de contenido de tiempo completo, algo que la mayoría rechaza.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#121214] border border-zinc-800/80 rounded-[1.5rem] p-8 group hover:border-[#D5B15B]/30 transition-colors">
           <h3 className="text-xl font-bold text-[#D5B15B] mb-6 flex items-center gap-3">
              <Lightbulb className="text-[#D5B15B]" size={22} />
              La solución que propone (su servicio)
            </h3>
            <p className="text-[15px] text-zinc-300 mb-6">Dice haber resuelto ese dilema con IA, en dos fases:</p>
            
            <div className="space-y-6">
               <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Fase 1 – Investigación:</h4>
                  <p className="text-[15px] text-zinc-400 leading-relaxed">
                     {isSummary ? `Agentes de IA analizan qué ganchos/formatos funcionan y dónde pierde clientes el negocio.` : `Usan "agentes de IA" para analizar qué contenido, ganchos (hooks) y formatos ya están funcionando en el nicho del cliente, qué mensajes generan confianza en los competidores, y cómo esos competidores convierten atención en ingresos reales. También detectan en qué punto el negocio del cliente está "perdiendo" clientes o dinero.`}
                  </p>
               </div>
               
               <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Fase 2 – Motor de conversión:</h4>
                  <p className="text-[15px] text-zinc-400 leading-relaxed">
                     {isSummary ? `Construyen un sistema con cientos de activos de confianza y agentes IA que califican y nutren leads.` : `Antes de lanzar contenido, construyen un sistema (separado del esfuerzo manual del cliente) que convierta esa atención en dinero: cientos de activos de "confianza y venta", más agentes de IA que califican, nutren y hacen seguimiento de cada lead sin dejar ninguno sin atender.`}
                  </p>
               </div>
               
               <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Fase 3 – Inundar el scroll:</h4>
                  <p className="text-[15px] text-zinc-400 leading-relaxed mb-3">Una vez armada la infraestructura, ofrecen dos caminos:</p>
                  <ul className="space-y-3 mb-4">
                     <li className="flex items-start gap-3 bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D5B15B] shrink-0 mt-1.5"></div>
                        <p className="text-[14.5px] text-zinc-300">Construir una marca personal (usando la voz y el punto de vista del cliente, pero a una escala que ningún equipo humano podría sostener).</p>
                     </li>
                     <li className="flex items-start gap-3 bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D5B15B] shrink-0 mt-1.5"></div>
                        <p className="text-[14.5px] text-zinc-300">Un motor de contenido 100% "faceless" generado con IA, sin que el cliente aparezca en cámara.</p>
                     </li>
                  </ul>
                  <p className="text-[15px] text-zinc-400">
                     Ambos caminos apuntan a estar presente en Instagram, TikTok, YouTube y X.
                  </p>
               </div>
            </div>
        </section>

        <section className={`grid ${isSummary ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-6`}>
          <div className="bg-[#121214] border border-zinc-800/80 rounded-[1.5rem] p-8 group hover:border-[#D5B15B]/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Key className="text-[#D5B15B]" size={22} />
              Diferenciador que resalta
            </h3>
            <p className="text-[15px] text-zinc-300 leading-relaxed">
              {isSummary ? `"Lo construyen y el cliente lo posee", sin dependencias ni retainers.` : `Afirma que "lo construyen y el cliente lo posee" (no hay retainers ni dependencia eterna de una agencia), y que el objetivo es eliminar la dependencia de proveedores de servicios o canales publicitarios que "se comen el margen".`}
            </p>
          </div>

          <div className="bg-[#121214] border border-zinc-800/80 rounded-[1.5rem] p-8 group hover:border-[#D5B15B]/30 transition-colors">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <ListOrdered className="text-[#D5B15B]" size={22} />
              Proceso de aplicación
            </h3>
            <ul className="space-y-4 mb-6">
               <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1A1A1E] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0 mt-0.5">1</div>
                  <p className="text-[14.5px] text-zinc-300">{isSummary ? `Aplicación con info básica.` : `El interesado aplica compartiendo información sobre su público, precios, mercado y principales competidores.`}</p>
               </li>
               <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1A1A1E] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0 mt-0.5">2</div>
                  <p className="text-[14.5px] text-zinc-300">{isSummary ? `Investigación con IA.` : `Lanzan los "agentes de IA" para investigar cómo el "1%" de ese nicho está ganando, y arman una propuesta/roadmap.`}</p>
               </li>
               <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1A1A1E] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0 mt-0.5">3</div>
                  <p className="text-[14.5px] text-zinc-300">En la llamada, presentan ese plan en vivo.</p>
               </li>
               <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1A1A1E] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0 mt-0.5">4</div>
                  <p className="text-[14.5px] text-zinc-300">Si el cliente está de acuerdo, arrancan a implementar el sistema ahí mismo.</p>
               </li>
               <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1A1A1E] border border-zinc-700 flex items-center justify-center text-sm font-bold text-white shrink-0 mt-0.5">5</div>
                  <p className="text-[14.5px] text-zinc-300">{isSummary ? `Si no hay oportunidad, ofrecen plan gratuito.` : `Si no encuentran una oportunidad real para ese negocio, se lo comunican honestamente y ofrecen, en cambio, un plan que el propio negocio pueda implementar por su cuenta.`}</p>
               </li>
            </ul>
            {!isSummary && (
               <p className="text-[14.5px] text-zinc-400">
                  Cierra invitando a aplicar mediante un link, prometiendo compartir todo lo que descubran sobre el negocio del espectador en la llamada.
               </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

const LinkedInVistasPage = ({ setActivePageId, setSplitPageId }: { setActivePageId: (id: string) => void, setSplitPageId?: (id: string) => void }) => {
  const [isSummary, setIsSummary] = useState(false);

  return (
  <div className="max-w-4xl mx-auto w-full pb-20 animate-in fade-in duration-300">
    <div className="flex items-center justify-between mb-12">
      <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
        <ArcadiaLogo />
        <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_parent')}>Arcadia</span>
        <span className="text-zinc-700">/</span>
        <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_acquisition_parent')}>Acquisition</span>
      </div>
      
      <div className="flex items-center bg-[#1A1A1E] rounded-lg p-1 border border-zinc-800">
        <button 
          onClick={() => setIsSummary(false)}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${!isSummary ? 'bg-[#27272A] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          Completo
        </button>
        <button 
          onClick={() => setIsSummary(true)}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${isSummary ? 'bg-[#27272A] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          Resumido
        </button>
      </div>
    </div>
    
    <div className="flex items-start gap-5 mb-10">
      <div className="border border-[#D5B15B]/30 p-3.5 rounded-2xl text-[#D5B15B] bg-[#1A1A1E] mt-1 shadow-[0_0_20px_rgba(213,177,91,0.15)]">
        <Magnet size={28} strokeWidth={1.5} />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-white tracking-tight mb-2">El Sistema de Señal de Vistas de Perfil</h2>
        <p className="text-[15px] text-zinc-400">$230K en pipeline calificado en 14 días, a partir de la única señal de LinkedIn que casi nadie lee</p>
      </div>
    </div>

    {/* Fuente de información */}
    <div className="bg-[#121214] border border-[#27272A]/80 rounded-2xl p-5 mb-10 flex items-center justify-between group hover:border-[#D5B15B]/50 transition-colors">
      <div className="flex items-center gap-4">
        <div className="bg-[#1A1A1E] p-3 rounded-xl text-zinc-400 group-hover:text-[#D5B15B] transition-colors border border-zinc-800">
          <LinkIcon size={20} />
        </div>
        <div>
          <h4 className="text-white font-medium text-[15px]">The Profile View Signal System</h4>
          <p className="text-zinc-500 text-[13px] mt-0.5">Fuente original del sistema (Notion)</p>
        </div>
      </div>
      <a 
        href="https://pricey-meteorite-f5d.notion.site/The-Profile-View-Signal-System-38fcdce0c35e81fb820dc5ca980837af"
        target="_blank"
        rel="noreferrer"
        className="px-4 py-2 bg-[#1A1A1E] hover:bg-[#27272A] text-zinc-300 hover:text-white rounded-lg text-sm font-medium transition-colors border border-zinc-800 flex items-center gap-2"
      >
        Ver documento <ExternalLink size={14} />
      </a>
    </div>

    {!isSummary ? (
      <div className="space-y-6 text-zinc-300 leading-relaxed text-[15.5px] max-w-[760px]">
        <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-6 text-zinc-400 mb-10">
          <h4 className="text-white font-semibold mb-2 flex items-center gap-2">🚀 ¿Querés implementar esto?</h4>
          <p className="mb-2">Este es el sistema que corremos en Swan para convertir intención pasiva en pipeline puntuado, de forma automática.</p>
          <p>Pedile a Swan que te lo implemente (Prueba Gratis)</p>
        </div>

        <h3 className="text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-zinc-800/50">Qué hizo este sistema por mí</h3>
        <p>Empecé en Swan hace tres semanas buscando una victoria rápida. No fui a construir un canal nuevo. Fui a cazar intención que ya estaba ahí, sin leer.</p>
        <p>Era la pestaña de "quién vio tu perfil", todo este tiempo.</p>
        <p>Esto es lo que entró una vez que lo conectamos, en 14 días:</p>
        <ul className="list-disc pl-6 space-y-1.5 text-zinc-400">
          <li><strong>1.087 vistas de perfil</strong> capturadas y procesadas</li>
          <li><strong>435 leads calificados como ICP</strong>, el 40% de cada vista</li>
          <li><strong>254 cuentas Oro + Plata</strong> graduadas automáticamente</li>
          <li><strong>14 MQLs</strong>, puntuados y derivados a outreach</li>
          <li><strong>$230K en pipeline calificado</strong>, 14 cuentas nuevas</li>
        </ul>
        <p>Cerca del 95% de ese pipeline vino de gente que jamás hubiera sabido que estaba interesada. No llenaron un formulario. No respondieron a una secuencia. Estaban investigando en silencio, y siendo ignorados.</p>
        <p>Nada de eso fue suerte. Fue un sistema: capturar la vista, resolver la empresa, puntuar la intención, derivarla a la jugada correcta. Este documento es ese sistema completo, generalizado para que lo corras vos mismo, más la skill exacta de 8 pasos que usamos para procesar cada vista.</p>
        <p>El hilo que atraviesa todo esto: <strong>la intención ya está ahí. Vos simplemente no la estás leyendo.</strong></p>

        <h3 className="text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-zinc-800/50">Por dónde empezar</h3>
        <p>No intentes construir todo de una vez. Encontrá tu cuello de botella y arrancá ahí:</p>
        <ul className="space-y-3">
          <li><strong>"No estoy capturando vistas de perfil en absoluto" →</strong> Empezá por la <strong>Fase 1</strong> (Instalar la Señal)</li>
          <li><strong>"Las capturo pero trato a todas por igual" →</strong> Empezá por la <strong>Fase 2</strong> (Puntuar la Señal)</li>
          <li><strong>"Quiero combinar esto con mis otros datos de intención, o correrlo en todo mi equipo" →</strong> Empezá por la <strong>Fase 3</strong> (Apilar y Escalar)</li>
          <li><strong>"Tengo cuentas graduadas pero me congelo al momento de escribir" →</strong> Empezá por la <strong>Fase 4</strong> (Convertir Señal en Pipeline)</li>
        </ul>

        <h3 className="text-2xl font-bold text-white mt-10 mb-4 pb-2 border-b border-zinc-800/50 flex items-center gap-2">⚠️ Antes de empezar: Cuatro reglas de configuración</h3>
        <ol className="list-decimal pl-6 space-y-3">
          <li><strong>Conseguí primero la capa de detección.</strong> Nada de lo que sigue funciona sin captura. Usamos LeadShark para detectar vistas de perfil no anónimas y disparar un webhook. Los visitantes anónimos (modo privado de LinkedIn Premium) se descartan en silencio, así que planificá para capturar un subconjunto, no el 100%.</li>
          <li><strong>Definí tu ICP y tus buyer personas antes de puntuar.</strong> El filtro de puntuación es tan bueno como tus definiciones. Escribí cómo es una cuenta ICP y qué cargos son compradores reales versus investigadores, antes de procesar una sola vista.</li>
          <li><strong>Elegí un canal y quedate ahí.</strong> El visitante llegó a vos por LinkedIn. El outreach por vista de perfil es solo LinkedIn. Sin pasos de email. Encontrá la intención en el mismo lugar donde apareció.</li>
          <li><strong>Cargá tu contexto una sola vez.</strong> Poné tu ICP, tu oferta, tus buyer personas y los estados de tu CRM en un solo lugar (un Proyecto de Claude, o el contexto de tu herramienta de orquestación) para que cada señal se puntúe contra el mismo cerebro en lugar de que vos tengas que reexplicar cada vez.</li>
        </ol>

        <h2 className="text-2xl font-bold text-[#D5B15B] mt-12 mb-4 pb-2 border-b border-zinc-800/50 flex items-center gap-2">🪟 Fase 1: Instalar la Señal</h2>
        <p className="italic text-zinc-400">Esta es la fase estrella. Cumple las cuatro promesas del posteo: la instalación de 10 minutos, la skill exacta, la lógica de apilado, y el escalado entre cuentas.</p>

        <h4 className="text-xl font-bold text-white mt-8 mb-3">1. La instalación de 10 minutos de la señal</h4>
        <p><strong>Objetivo:</strong> Convertir la pestaña "quién vio tu perfil" de algo que mirás de vez en cuando en un evento estructurado que se dispara solo, en el momento en que ocurre.</p>
        <p><strong>Insumos:</strong> Un perfil de LinkedIn que querés monitorear, una herramienta de detección (nosotros usamos LeadShark), y un destino para el evento (un webhook hacia tu herramienta de orquestación o plataforma de automatización).</p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-[#1A1A1E] text-zinc-300">
              <tr><th className="p-3 border border-zinc-800">Parte</th><th className="p-3 border border-zinc-800">Qué hace</th></tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-zinc-800 font-medium">Detector</td><td className="p-3 border border-zinc-800 text-zinc-400">LeadShark observa el perfil y detecta vistas no anónimas</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Disparador</td><td className="p-3 border border-zinc-800 text-zinc-400">Un webhook se dispara en cada evento <code>new.profile.visit</code>. Si no es una vista nueva, se detiene.</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Manejador (Handler)</td><td className="p-3 border border-zinc-800 text-zinc-400">El disparador carga una skill que procesa al visitante de punta a punta (ver ítem 4 abajo)</td></tr>
            </tbody>
          </table>
        </div>
        <p>Esa es toda la tubería. El detector la agarra, el disparador se activa, el manejador decide cuánto vale y qué hacer. Diez minutos de configuración te compran una señal que corre para siempre.</p>

        <h4 className="text-xl font-bold text-white mt-8 mb-3">2. La escalera de apilado de señales</h4>
        <p><strong>Objetivo:</strong> Dejar de tratar una vista de perfil como un "lead caliente" binario y empezar a leerla en contexto con tus otras señales de intención.</p>
        <p><strong>Insumos:</strong> Tus datos de intención existentes (visitas al sitio web, chatbot, respuestas, reuniones, interacción en posteos) y una forma de vincular todo eso a una sola cuenta.</p>
        <p>Una vista de perfil es intencional pero pasiva. Alguien eligió mirar, pero no hizo nada más allá de mirar. Por eso queda en el medio de la escalera, no arriba de todo:</p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-[#1A1A1E] text-zinc-300">
              <tr><th className="p-3 border border-zinc-800">Señal</th><th className="p-3 border border-zinc-800">Peso</th><th className="p-3 border border-zinc-800">Por qué</th></tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-zinc-800 font-medium">Visita identificada al sitio web</td><td className="p-3 border border-zinc-800 text-zinc-400">Alta</td><td className="p-3 border border-zinc-800 text-zinc-400">Intención directa de primera mano</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Interacción con chatbot</td><td className="p-3 border border-zinc-800 text-zinc-400">Alta</td><td className="p-3 border border-zinc-800 text-zinc-400">Compromiso activo</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Respuesta a outreach</td><td className="p-3 border border-zinc-800 text-zinc-400">Alta</td><td className="p-3 border border-zinc-800 text-zinc-400">Respuesta activa</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Reunión completada</td><td className="p-3 border border-zinc-800 text-zinc-400">Alta</td><td className="p-3 border border-zinc-800 text-zinc-400">Señal de primera mano más fuerte</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium text-[#D5B15B]">Vista de perfil de LinkedIn</td><td className="p-3 border border-zinc-800 text-[#D5B15B]">Media-Alta</td><td className="p-3 border border-zinc-800 text-zinc-400">Investigación intencional, pero pasiva</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Interacción en posteo de LinkedIn (like/comentario)</td><td className="p-3 border border-zinc-800 text-zinc-400">Baja</td><td className="p-3 border border-zinc-800 text-zinc-400">Débil por sí sola</td></tr>
            </tbody>
          </table>
        </div>
        <p>La regla más importante de todo este sistema vive acá, y la voy a cubrir por completo en la Fase 2: una vista de perfil por sí sola nunca puede ser tu nivel más alto. Su techo es Plata. Ese techo solo se levanta cuando se apila otra señal real encima.</p>

        <h4 className="text-xl font-bold text-white mt-8 mb-3">3. La jugada de escala multi-perfil</h4>
        <p><strong>Objetivo:</strong> Escalar la señal de un perfil a todas las personas de cara al público de tu empresa, y destrabar una señal de compra que solo se ve a nivel equipo.</p>
        <p><strong>Insumos:</strong> La misma instalación del ítem 1, repetida por persona, todas alimentando un único registro de cuenta compartido.</p>
        <p>Corré la señal en todos a quienes los compradores investigan antes de comprar: fundadores, AEs, tu jefe de crecimiento. Cada persona tiene su propio disparador y manejador, todos escribiendo al mismo CRM. Acá está el premio que solo aparece a escala. Cuando dos de tus personas clave son vistas por la misma empresa en una ventana corta de tiempo, sin ninguna otra señal, eso no es coincidencia. Es un comité de compra haciendo investigación coordinada. Elevamos automáticamente el nivel de esa cuenta solo por esa base. Una persona mirando es curiosidad. Dos personas de tu lado siendo miradas por una cuenta es un proyecto.</p>

        <h4 className="text-xl font-bold text-white mt-8 mb-3">4. La skill exacta que usamos</h4>
        <p><strong>Objetivo:</strong> Procesar cada vista de la misma manera, sin humano en el medio, para que 1.087 vistas se conviertan en 14 MQLs limpios en lugar de una planilla que nadie abre.</p>
        <p><strong>Insumos:</strong> El payload del webhook del ítem 1, tu CRM, una fuente de enriquecimiento, y un respaldo de scraping de perfil (nosotros usamos Apify).</p>
        <p>Esta es la skill exacta de 8 pasos que corre en cada vista. Pegala en tu herramienta de orquestación o Proyecto de Claude y adaptá los detalles a tu stack:</p>
        
        <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-6 text-sm text-zinc-400 my-6 font-mono leading-[1.7]">
          <strong className="text-white block mb-4">La Skill de Señal de Vista de Perfil (8 pasos)</strong>
          <p className="mb-2">1. CAPTURAR Y VALIDAR. Disparar solo con un evento de visita de perfil nuevo. Si el visitante es anónimo, descartar en silencio y detener.</p>
          <p className="mb-2">2. DEDUPLICAR. Dos resguardos contra reprocesamiento: deduplicar por ID exacto de visita, y un enfriamiento de sesión de 1 hora por visitante. Una vista repetida genuina después de esa ventana pasa ambos resguardos y se repuntúa como intención más fuerte.</p>
          <p className="mb-2">3. RESOLVER IDENTIDAD Y EMPRESA. Enriquecer al visitante. Si el enriquecimiento falla, recurrir a scraping de perfil. Si aún así no se puede resolver la empresa con confianza, registrarlo en una nota de visitantes no resueltos y descartar.</p>
          <p className="mb-2">4. VERIFICACIÓN INTERNA. Si el visitante es de tu propia empresa, detener.</p>
          <p className="mb-2">5. VERIFICACIÓN DE RELACIÓN EN EL CRM. Ramificar según el estado de la cuenta: socio activo, cliente, negociación abierta, perdida-cerrada, o nueva (ruteo completo en la Fase 3).</p>
          <p className="mb-2">6. VERIFICACIÓN DE ICP. Si es nueva y no es ICP, descarte silencioso, sin escrituras. Empresas muy chicas o self-serve, freno duro.</p>
          <p className="mb-2">7. REGISTRAR Y PUNTUAR. Crear la empresa y el contacto en tu CRM, registrar la señal como nota, correr el puntaje de lead, y enriquecer el comité de compra.</p>
          <p>8. RUTEAR Y NOTIFICAR. Aplicar el filtro de persona (Fase 2), derivar a la jugada correcta, y publicar un debug de una línea en un canal por dueño de cuenta para que puedas ver cada decisión que tomó el sistema.</p>
        </div>
        <p>El paso de debug en el punto 8 es la parte que la gente se salta y luego lamenta. Un canal por dueño de cuenta mostrando cada decisión de PUNTUADO / NO ES ICP / CLIENTE EXISTENTE / RELACIÓN EXISTENTE es cómo confiás en la automatización en vez de tener que vigilarla.</p>

        <h2 className="text-2xl font-bold text-[#D5B15B] mt-12 mb-4 pb-2 border-b border-zinc-800/50 flex items-center gap-2">🧠 Fase 2: Puntuar la Señal</h2>
        <p className="italic text-zinc-400">Una vista es materia prima. Un grado es útil. Esta fase es el cerebro que convierte una cosa en la otra, y contiene la regla que sorprende a todos.</p>

        <h4 className="text-xl font-bold text-white mt-8 mb-3">1. Los niveles Bronce-Plata-Oro-Diamante</h4>
        <p><strong>Objetivo:</strong> Poner a cada cuenta en una única escala consistente para que "interesante" se convierta en un nivel sobre el cual rutear.</p>
        <p>Puntuamos cada cuenta en cuatro niveles. Antes de que exista una negociación, el puntaje es intención más potencial de ACV. Después de la conversión, cambia a señales de uso más potencial de expansión. Para vistas de perfil de inbound, casi siempre estás en el mundo previo a la conversión: qué tan fuerte es la intención, y cuán grande podría llegar a ser.</p>

        <h4 className="text-xl font-bold text-white mt-8 mb-3">2. El techo de Plata (leelo dos veces)</h4>
        <p><strong>Objetivo:</strong> Evitar el error más caro en ventas basadas en intención: tratar una mirada pasiva como una señal de mano levantada.</p>
        <p>Acá está la regla: <strong>una vista de perfil como única señal de primera mano tiene como techo Plata. Nada de Oro. Nada de Diamante.</strong> Y no importa qué tan senior sea el visitante, cuántas veces haya visto el perfil, si están conectados, ni cuán grande sea la negociación potencial.</p>
        <p>Esto se siente incorrecto la primera vez que lo leés. El CEO de tu cuenta soñada vio tu perfil, seguro que eso es Oro, ¿no? No. Miró. Mirar no es comprar. Si le disparás un "vi que estabas chusmeando, ¿querés una demo?" a cada visitante senior, entrenás a tus mejores cuentas para que te vean como la persona que vigila el tráfico de su perfil. El techo te protege de tu propio entusiasmo.</p>
        <p>El techo se levanta solo cuando llega una segunda señal real. Lo cual nos lleva a la tabla de apilado.</p>

        <h4 className="text-xl font-bold text-white mt-8 mb-3">3. Las condiciones para levantar el techo</h4>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-[#1A1A1E] text-zinc-300">
              <tr><th className="p-3 border border-zinc-800 w-1/2">Condición</th><th className="p-3 border border-zinc-800 w-1/2">Resultado</th></tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-zinc-800 font-medium">Vista de perfil sola</td><td className="p-3 border border-zinc-800 text-zinc-400">Techo Plata</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Vista de perfil + otra señal de primera mano de alta intención + buyer persona</td><td className="p-3 border border-zinc-800 text-zinc-400">Elegible para Oro, se rutea como pre-conversión con mano levantada</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Vista de perfil + otras señales pero persona débil o no compradora</td><td className="p-3 border border-zinc-800 text-zinc-400">Se queda en Plata. El outreach apunta a un comprador real del comité, no al visitante junior</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Dos de tus personas clave vistas por la misma empresa, sin otras señales</td><td className="p-3 border border-zinc-800 text-zinc-400">Plata sube a Oro (investigación coordinada)</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Cuenta perdida-cerrada o ex-usuario de prueba con una vista de perfil fresca</td><td className="p-3 border border-zinc-800 text-zinc-400">Se aplica un piso de Oro automáticamente</td></tr>
            </tbody>
          </table>
        </div>
        <p>Esa última fila es en silencio una de las mejores. Una empresa que se fue, volviendo a mirarte, es una reapertura, y el sistema la agarra sin que nadie tenga que recordar a la cuenta por su nombre.</p>

        <h4 className="text-xl font-bold text-white mt-8 mb-3">4. El filtro de persona</h4>
        <p><strong>Objetivo:</strong> Asegurarse de que un visitante junior nunca infle una cuenta, y que un comprador real nunca termine nutrido hasta el cansancio.</p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-[#1A1A1E] text-zinc-300">
              <tr><th className="p-3 border border-zinc-800">Persona</th><th className="p-3 border border-zinc-800">Ejemplos</th><th className="p-3 border border-zinc-800">Comportamiento</th></tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-zinc-800 font-medium whitespace-nowrap">Comprador fuerte</td><td className="p-3 border border-zinc-800 text-zinc-400">CRO, VP de Ventas, VP de Marketing, CMO, CEO, Cofundador, Líder de RevOps, GTM Engineer...</td><td className="p-3 border border-zinc-800 text-zinc-400">Se rutea a la jugada de MQL. Se envía una solicitud de conexión desde el dueño del perfil.</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium whitespace-nowrap">Débil o no comprador</td><td className="p-3 border border-zinc-800 text-zinc-400">IC, IT, Soporte, Finanzas, RRHH, Operaciones, Analista, cargos junior</td><td className="p-3 border border-zinc-800 text-zinc-400">Se rutea solo a nutrición. Sin solicitud de conexión. Sin elevación a Oro, aunque se apilen otras señales.</td></tr>
            </tbody>
          </table>
        </div>
        <p>El filtro es lo que evita que "un ingeniero de soporte de la cuenta soñada te miró" genere un incendio. La cuenta puede seguir importando. Simplemente vas a buscar al comprador real dentro del comité en lugar de venderle al investigador.</p>

        <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-6 text-sm text-zinc-400 my-6 font-mono leading-[1.7]">
          <strong className="text-white block mb-4">Prompt: El Puntuador de Grado de Cuenta</strong>
          <p className="mb-2">Sos un motor de puntuación de leads B2B. Tu único trabajo es graduar una cuenta en una escala Bronce / Plata / Oro / Diamante usando reglas estrictas de intención, y nunca inflar una señal pasiva.</p>
          <p className="mb-2">Reglas que debés cumplir:</p>
          <p className="mb-2">1. Una vista de perfil como única señal de primera mano tiene techo en Plata, sin importar seniority, cantidad de vistas, estado de conexión, o tamaño de la negociación.</p>
          <p className="mb-2">2. El techo sube a Oro solo si hay una segunda señal de primera mano de alta intención (visita al sitio web, chatbot, respuesta, reunión) Y la persona involucrada es un buyer persona.</p>
          <p className="mb-2">3. Si la única persona involucrada es un no-comprador (IC, IT, Soporte, Finanzas, RRHH, Operaciones, Analista), la cuenta se queda en Plata sin importar qué más se apile.</p>
          <p className="mb-4">4. Una cuenta perdida-cerrada o ex-usuaria de prueba con cualquier señal fresca obtiene un piso de Oro.</p>
          <p className="mb-2">Contexto que voy a pegar: el nombre de la cuenta, el cargo del visitante, todas las señales que tenemos sobre esta cuenta con fechas, el estado de la cuenta en el CRM, y una estimación aproximada de ACV.</p>
          <p className="mb-4">Devolveme una tabla con las columnas [Cuenta | Grado | Regla que fijó el grado | La única siguiente señal que elevaría el grado | Jugada recomendada]. Después escribí una oración sobre por qué este grado y no el de arriba.</p>
          <p>[PEGAR CUENTA, CARGO DEL VISITANTE, SEÑALES, ESTADO DEL CRM, ACV ACÁ]</p>
        </div>

        <h2 className="text-2xl font-bold text-[#D5B15B] mt-12 mb-4 pb-2 border-b border-zinc-800/50 flex items-center gap-2">⚙️ Fase 3: Apilar y Escalar</h2>
        <p className="italic text-zinc-400">La Fase 2 gradúa una cuenta de forma aislada. Esta fase es cómo se comporta la señal una vez que está corriendo en todo tu CRM y apilándose con todo lo demás que sabés.</p>

        <h4 className="text-xl font-bold text-white mt-8 mb-3">1. El ruteador de relaciones</h4>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-[#1A1A1E] text-zinc-300">
              <tr><th className="p-3 border border-zinc-800 w-1/3">Estado de la cuenta</th><th className="p-3 border border-zinc-800 w-2/3">Qué pasa</th></tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-zinc-800 font-medium">Socio activo</td><td className="p-3 border border-zinc-800 text-zinc-400">Se descarta en silencio. Sin ruido en tus cuentas de CS y partnerships.</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Cliente (cerrado-ganado)</td><td className="p-3 border border-zinc-800 text-zinc-400">Se registra para visibilidad, pero sin puntuación ni escrituras a pipeline</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Negociación abierta o perdida-cerrada</td><td className="p-3 border border-zinc-800 text-zinc-400">Se rutea a una jugada de relación existente. Perdida-cerrada obtiene el piso de Oro.</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Nueva y es ICP</td><td className="p-3 border border-zinc-800 text-zinc-400">Pipeline completo: crear la empresa y el contacto, registrar la señal, correr la puntuación, enriquecer el comité de compra, redactar el outreach</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Nueva y no es ICP</td><td className="p-3 border border-zinc-800 text-zinc-400">Descarte silencioso. Sin escrituras, sin puntuación, sin memoria.</td></tr>
              <tr><td className="p-3 border border-zinc-800 font-medium">Muy chica o self-serve</td><td className="p-3 border border-zinc-800 text-zinc-400">Freno duro. Se rutea a tu motor self-serve, no a ventas.</td></tr>
            </tbody>
          </table>
        </div>
        <p>La disciplina acá está en los descartes silenciosos. El trabajo del sistema es proteger tu atención tanto como encontrar pipeline. La mayoría de esas 1.087 vistas no merecían un humano. El ruteador es la razón por la que las 14 que sí lo merecían fueron obvias.</p>

        <h4 className="text-xl font-bold text-white mt-8 mb-3">2. El constructor de intención por vista repetida</h4>
        <p>Las herramientas de detección disparan múltiples eventos por sesión de vista, así que necesitás deduplicación. Pero si deduplicás demasiado agresivo, perdés el patrón más valioso: alguien volviendo. Una vista repetida genuina después de la ventana de enfriamiento es intención más fuerte, no un duplicado. Contá las vistas repetidas de la misma empresa en 30 días y alimentalas a la lógica de apilado. Volver dos veces en un mes es una señal reveladora.</p>

        <h4 className="text-xl font-bold text-white mt-8 mb-3">3. El apilado del comité de compra</h4>
        <p>Acá es donde la jugada multi-perfil de la Fase 1 y las reglas de apilado de la Fase 2 se combinan. Una vista junior sola es ruido. La misma empresa viendo a dos de tus personas, visitando tu sitio, y abriendo tu chatbot en dos semanas es un comité en movimiento. Puntuá la cuenta, no los eventos individuales. Toda la razón para escalar la señal en tu equipo es hacer visible este patrón.</p>

        <h4 className="text-xl font-bold text-white mt-8 mb-3">4. La red de seguridad de visitantes no resueltos</h4>
        <p>Cuando no podés resolver con confianza la empresa de un visitante, no lo borres sin más. Registralo en una nota de visitantes no resueltos. Ahí aparecen patrones: el mismo cargo no resoluble viendo repetidamente, clústeres de una región. Es un backlog de intención que podés revisar cuando tu enriquecimiento mejore.</p>

        <h2 className="text-2xl font-bold text-[#D5B15B] mt-12 mb-4 pb-2 border-b border-zinc-800/50 flex items-center gap-2">💸 Fase 4: Convertir Señal en Pipeline</h2>
        <p className="italic text-zinc-400">Una cuenta graduada es potencial. Una llamada agendada es pipeline. Esta es la movida que cierra la brecha, y es deliberadamente angosta.</p>

        <h4 className="text-xl font-bold text-white mt-8 mb-3">1. La restricción de canal</h4>
        <p>El outreach por vista de perfil es solo LinkedIn. Sin pasos de email. Llegaron a vos a través de LinkedIn, así que te quedás en LinkedIn. La tentación es buscar su email y "multi-canalizar". Resistila. La señal fue una señal de LinkedIn, y la respuesta más cálida posible vive en el canal donde ya te miraron.</p>

        <h4 className="text-xl font-bold text-white mt-8 mb-3">2. La conexión iniciada por el dueño</h4>
        <p>Cuando una persona compradora fuerte ve un perfil, la solicitud de conexión sale del dueño del perfil que vieron, no de un SDR al azar. Ellos te miraron. Vos respondés. Es el outreach en frío menos frío que existe, porque no es frío, es recíproco.</p>

        <h4 className="text-xl font-bold text-white mt-8 mb-3">3. La redirección comprador-no-visitante</h4>
        <p>Si una persona junior de una gran cuenta te miró, la cuenta es interesante pero la persona no es tu objetivo. No le vendas al analista. Usá la señal como tu pie para encontrar y acercarte al comprador real dentro del comité. La vista te dijo que la cuenta está en movimiento. Tu trabajo es encontrar la mano que maneja el presupuesto.</p>

        <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-6 text-sm text-zinc-400 my-6 font-mono leading-[1.7]">
          <strong className="text-white block mb-4">Prompt: El Redactor de Outreach por Vista de Perfil</strong>
          <p className="mb-2">Sos un redactor senior de outbound de LinkedIn. Escribís primeros contactos recíprocos y de baja presión para personas que acaban de ver mi perfil. Nunca sonás como si estuvieras vigilando su tráfico.</p>
          <p className="mb-2">Reglas duras:</p>
          <p className="mb-2">1. Solo LinkedIn. Sin mencionar el email.</p>
          <p className="mb-2">2. Nunca decir "vi que viste mi perfil". Implicar calidez sin resultar inquietante sobre la señal.</p>
          <p className="mb-2">3. Si el visitante es un buyer persona, escribir una nota de conexión más un primer mensaje como si yo estuviera respondiendo personalmente.</p>
          <p className="mb-4">4. Si el visitante no es comprador, en cambio escribir un mensaje corto a un comprador con nombre dentro de su equipo, usando la prioridad probable de la cuenta como ángulo.</p>
          <p className="mb-4">Contexto que voy a pegar: el nombre y cargo del visitante, su empresa y a qué se dedica, mi oferta en una línea, y el grado y las señales de la cuenta.</p>
          <p className="mb-4">Salida: [Nota de conexión, menos de 300 caracteres] y [Primer mensaje, 3 a 5 oraciones], después una línea nombrando lo de mayor intención en el contexto que debería liderar.</p>
          <p>[PEGAR VISITANTE, EMPRESA, MI OFERTA, GRADO, SEÑALES ACÁ]</p>
        </div>

        <h2 className="text-2xl font-bold text-[#D5B15B] mt-12 mb-4 pb-2 border-b border-zinc-800/50 flex items-center gap-2">🔒 Bono: La skill completa de puntuación + secuencia</h2>
        
        <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-6 text-sm text-zinc-400 my-6 font-mono leading-[1.7]">
          <strong className="text-white block mb-4">Prompt: El Clasificador de Filtro de Persona</strong>
          <p className="mb-2">Sos un clasificador de buyer persona para ruteo de intención B2B. Dado el cargo y rol de un visitante, decidí si es un comprador fuerte o débil/no comprador, y devolvé la ruta.</p>
          <p className="mb-2">Compradores fuertes: CRO, VP de Ventas, VP de Marketing, CMO, CEO, Cofundador, Líder de RevOps, GTM Engineer, Líder de Crecimiento, Jefe de Demand Gen, Dueño de Agencia, y equivalentes claros.</p>
          <p className="mb-4">Débiles/no compradores: contribuyentes individuales, IT, Soporte, Finanzas, RRHH, Operaciones, Analista, y cargos junior.</p>
          <p className="mb-4">Contexto que voy a pegar: uno o más visitantes con cargo, seniority, y empresa.</p>
          <p className="mb-4">Devolveme una tabla con las columnas [Visitante | Cargo | Comprador o No Comprador | Ruta (jugada MQL / solo nutrición) | ¿Enviar solicitud de conexión? Sí o No]. Si el cargo es ambiguo, clasificalo como no comprador y decime qué te haría cambiar de opinión.</p>
          <p>[PEGAR VISITANTES ACÁ]</p>
        </div>

        <p className="font-semibold text-white mt-8">La secuencia de tres mensajes de LinkedIn para una vista de buyer persona:</p>
        <div className="border-l-2 border-[#D5B15B] pl-4 my-4 space-y-4">
          <p><strong>Mensaje 1 (nota de conexión):</strong> Corto, humano, sin pitch. Referenciar algo específico sobre su trabajo o empresa, no la vista.</p>
          <p><strong>Mensaje 2 (día 2, tras aceptar):</strong> Una línea de relevancia genuina para su mundo, después una pregunta suave y opcional. Sin pedir reunión todavía.</p>
          <p><strong>Mensaje 3 (día 4-5):</strong> Nombrar el problema específico que resolvés para empresas como la suya, ofrecer un recurso concreto o una llamada de 15 minutos, y hacer que decir que no sea fácil.</p>
        </div>
        <p>Mantené los tres en LinkedIn. En el momento en que saltás a email, perdés la reciprocidad que hizo cálida a la señal.</p>
        
        <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-8 mt-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#D5B15B]/10 rounded-full blur-3xl"></div>
          <h3 className="text-xl font-bold text-white mb-4 relative z-10">Reflexión final</h3>
          <p className="text-zinc-400 mb-6 max-w-[500px] mx-auto relative z-10">Todos están peleando por fabricar atención nueva. Postear más, gastar más, alcanzar más. Mientras tanto, los compradores ya están en la sala, mirando en silencio, levantando la mano en una pestaña que nadie lee. La intención siempre estuvo ahí. La única pregunta es si la estás leyendo.</p>
          <a href="https://getswan.com" target="_blank" rel="noreferrer" className="inline-flex items-center text-[#D5B15B] hover:text-[#e0c279] font-medium transition-colors relative z-10">
            Fijate en getswan.com →
          </a>
        </div>
      </div>
    ) : (
      <div className="space-y-12">
        {/* Resumen de la estrategia */}
        <div className="bg-[#121214] border border-[#27272A] rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D5B15B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="mb-8 relative z-10">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Zap size={20} className="text-[#D5B15B]"/> El poder de las vistas pasivas
            </h3>
            <p className="text-[15.5px] text-zinc-300 leading-relaxed mb-6">
              El 95% del pipeline calificado puede venir de personas que jamás demostraron interés activo, pero visitaron tu perfil en silencio. La clave es capturar esa señal y puntuarla para atacar la intención antes de que llenen un formulario.
            </p>
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-2`}>
               <div className="bg-[#1A1A1E] border border-[#27272A] rounded-xl p-4 text-center">
                  <div className="text-xs text-zinc-500 mb-1">Vistas</div>
                  <div className="text-lg font-bold text-white">1.087</div>
               </div>
               <div className="bg-[#1A1A1E] border border-[#27272A] rounded-xl p-4 text-center">
                  <div className="text-xs text-zinc-500 mb-1">ICP Leads</div>
                  <div className="text-lg font-bold text-white">435</div>
               </div>
               <div className="bg-[#1A1A1E] border border-[#27272A] rounded-xl p-4 text-center">
                  <div className="text-xs text-zinc-500 mb-1">Cuentas Oro</div>
                  <div className="text-lg font-bold text-white">254</div>
               </div>
               <div className="bg-[#1A1A1E] border border-[#D5B15B]/20 rounded-xl p-4 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#D5B15B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-xs text-[#D5B15B] mb-1 relative z-10">Pipeline</div>
                  <div className="text-lg font-bold text-[#D5B15B] relative z-10">$230K</div>
               </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-6">El Sistema de 4 Fases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1A1A1E] border border-[#27272A]/80 rounded-[1.5rem] p-6 hover:border-[#D5B15B]/30 transition-colors">
               <h4 className="font-semibold text-white mb-3 text-lg flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div> Fase 1: Instalación</h4>
               <p className="text-[14px] text-zinc-400">Usa un detector (LeadShark) para atrapar cada visita y disparar un Webhook hacia un handler. Si 2 perfiles de tu equipo son vistos por la misma empresa, es investigación coordinada.</p>
            </div>
            <div className="bg-[#1A1A1E] border border-[#27272A]/80 rounded-[1.5rem] p-6 hover:border-[#D5B15B]/30 transition-colors">
               <h4 className="font-semibold text-white mb-3 text-lg flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div> Fase 2: Puntuación</h4>
               <p className="text-[14px] text-zinc-400"><strong>El techo de Plata:</strong> Una vista sola NUNCA debe pasar de Plata. Mirar no es comprar. Sube a Oro solo si hay una segunda señal fuerte y es el buyer persona.</p>
            </div>
            <div className="bg-[#1A1A1E] border border-[#27272A]/80 rounded-[1.5rem] p-6 hover:border-[#D5B15B]/30 transition-colors">
               <h4 className="font-semibold text-white mb-3 text-lg flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div> Fase 3: Ruteo</h4>
               <p className="text-[14px] text-zinc-400">Si es cliente, no haces outreach. Si es nueva e ICP, va a pipeline. Si es ICP pero el visitante es junior, usa la señal para llegar al tomador de decisión.</p>
            </div>
            <div className="bg-[#1A1A1E] border border-[#27272A]/80 rounded-[1.5rem] p-6 hover:border-[#D5B15B]/30 transition-colors">
               <h4 className="font-semibold text-[#D5B15B] mb-3 text-lg flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div> Fase 4: Ejecución</h4>
               <p className="text-[14px] text-zinc-400">Solo outreach por LinkedIn (mismo canal de la señal). El mensaje lo envía el perfil que visitaron. Cero emails. Tono cálido, sin decir "vi que miraste mi perfil".</p>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  );
};


const LinkedInOutboundPage = ({ setActivePageId, setSplitPageId }: { setActivePageId: (id: string) => void, setSplitPageId?: (id: string) => void }) => {
  const [isSummary, setIsSummary] = useState(false);

  return (
  <div className="max-w-4xl mx-auto w-full pb-20 animate-in fade-in duration-300">
    <div className="flex items-center justify-between mb-12">
      <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
        <ArcadiaLogo />
        <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_parent')}>Arcadia</span>
        <span className="text-zinc-700">/</span>
        <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_acquisition_parent')}>Acquisition</span>
      </div>
      
      <div className="flex items-center bg-[#1A1A1E] rounded-lg p-1 border border-zinc-800">
        <button 
          onClick={() => setIsSummary(false)}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${!isSummary ? 'bg-[#27272A] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          Completo
        </button>
        <button 
          onClick={() => setIsSummary(true)}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${isSummary ? 'bg-[#27272A] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          Resumido
        </button>
      </div>
    </div>
    
    <div className="flex items-start gap-5 mb-10">
      <div className="border border-[#D5B15B]/30 p-3.5 rounded-2xl text-[#D5B15B] bg-[#1A1A1E] mt-1 shadow-[0_0_20px_rgba(213,177,91,0.15)]">
        <Send size={28} strokeWidth={1.5} />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Outbound y LinkedIn</h2>
        <p className="text-[15px] text-zinc-400">La Estrategia Completa de Outbound en LinkedIn: Cómo Construí un Negocio de $35K/Mes Enviando 20 DMs por Día</p>
      </div>
    </div>

    {/* Fuente de información */}
    <div className="bg-[#121214] border border-[#27272A]/80 rounded-2xl p-5 mb-12 flex items-center justify-between group hover:border-[#D5B15B]/50 transition-colors">
      <div className="flex items-center gap-4">
        <div className="bg-[#1A1A1E] p-3 rounded-xl text-zinc-400 group-hover:text-[#D5B15B] transition-colors border border-zinc-800">
          <LinkIcon size={20} />
        </div>
        <div>
          <h4 className="text-white font-medium text-[15px]">LinkedIn Outbound Strategy</h4>
          <p className="text-zinc-500 text-[13px] mt-0.5">Autor: Xavier Caffrey • 27 de enero de 2026 • 18 min de lectura</p>
        </div>
      </div>
      <a 
        href="#"
        className="text-zinc-500 hover:text-[#D5B15B] transition-colors bg-[#1A1A1E] p-2 rounded-lg border border-zinc-800/50"
      >
        <ExternalLink size={16} />
      </a>
    </div>

    {!isSummary ? (
      <div className="space-y-16 animate-in fade-in duration-300">
        
        {/* Intro */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-[#1A1A1E] to-[#121214] border-l-4 border-[#D5B15B] p-6 rounded-r-xl shadow-lg">
            <p className="italic text-zinc-300 text-[16px] leading-relaxed">
              <strong className="text-white font-semibold">Dato de portada:</strong> $35K/mes de ingresos de agencia construidos en el primer año con 20 DMs de LinkedIn por día y sin publicidad paga.
            </p>
          </div>
          
          <div className="space-y-4 text-[16px] text-zinc-300 leading-relaxed">
            <p>Los mensajes de LinkedIn tienen una tasa de respuesta del 10,3%. El email frío tiene 5,1%. Eso es el doble de respuestas con el mismo esfuerzo.</p>
            <p>Escalé mi agencia a $35K por mes en el primer año casi enteramente desde LinkedIn. Sin publicidad paga. Sin lista de emails. Solo contenido y 20 DMs por día. Antes de aprender email frío, antes de entender cualquier otro canal, solo LinkedIn construyó mi negocio.</p>
            <p>Esta guía cubre todo: optimización de perfil, estrategia de conexiones, frameworks de mensajería, y la rutina diaria exacta que genera reuniones. Nada de teoría. Esto es lo que hice, respaldado por datos de más de 500.000 mensajes de outreach analizados por Closely, Expandi y Belkins en 2025.</p>
          </div>
          
          <div className="bg-[#121214] border border-[#27272A]/80 p-6 rounded-2xl shadow-sm flex gap-4 mt-6 hover:border-[#3F3F46] transition-colors">
            <div className="text-[#D5B15B] mt-1"><Zap size={24} /></div>
            <div>
              <h4 className="font-bold text-white mb-2 text-lg">Respuesta rápida</h4>
              <p className="text-[15.5px] text-zinc-400 leading-relaxed">
                El outbound de LinkedIn tiene una tasa de respuesta del 10,3% —el doble que el 5,1% del email frío— porque los prospectos pueden ver tu perfil, tus conexiones en común y tu contenido antes de leer tu mensaje. Las solicitudes de conexión personalizadas obtienen un 72% más de respuestas que las genéricas, y una rutina diaria de 20 DMs bien dirigidos más la publicación constante de contenido puede escalar una agencia a $35K/mes en el primer año.
              </p>
            </div>
          </div>
        </div>

        {/* Sección 1 */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">1</div> 
            Por qué el outbound de LinkedIn funciona mejor que el email
          </h3>
          
          <div className="space-y-6 text-[16px] text-zinc-300 leading-relaxed mb-8">
            <p>El outreach frío en LinkedIn funciona porque los prospectos ven tu cara, tu titular (headline), tus conexiones en común y tu actividad reciente antes de leer una sola palabra. El email no te da esa capa de contexto.</p>
            <p>Cuando alguien recibe tu mensaje de LinkedIn, puede verificar instantáneamente:</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
              <div className="bg-[#121214] border border-zinc-800 p-4 rounded-xl flex flex-col items-center text-center gap-2">
                <Users className="text-[#3B82F6]" size={24}/>
                <span className="text-[14px] font-medium text-white">Quién sos</span>
                <span className="text-[13px] text-zinc-500">Foto de perfil</span>
              </div>
              <div className="bg-[#121214] border border-zinc-800 p-4 rounded-xl flex flex-col items-center text-center gap-2">
                <Briefcase className="text-[#55B467]" size={24}/>
                <span className="text-[14px] font-medium text-white">A qué te dedicás</span>
                <span className="text-[13px] text-zinc-500">Headline</span>
              </div>
              <div className="bg-[#121214] border border-zinc-800 p-4 rounded-xl flex flex-col items-center text-center gap-2">
                <Share2 className="text-[#E1306C]" size={24} />
                <span className="text-[14px] font-medium text-white">A quién conocés</span>
                <span className="text-[13px] text-zinc-500">Conexiones mutuas</span>
              </div>
              <div className="bg-[#121214] border border-zinc-800 p-4 rounded-xl flex flex-col items-center text-center gap-2">
                <CheckCircle2 className="text-[#D5B15B]" size={24}/>
                <span className="text-[14px] font-medium text-white">Si sos creíble</span>
                <span className="text-[13px] text-zinc-500">Contenido / Reviews</span>
              </div>
            </div>

            <p>Esta prueba social incorporada hace que el outreach en LinkedIn se sienta menos frío, incluso cuando es el primer contacto.</p>
            <p>La plataforma también tiene una densidad que no podés ignorar. Más de 65 millones de tomadores de decisiones usan LinkedIn. Tus compradores están ahí, scrolleando, posteando, conectando. A diferencia del email, los estás alcanzando en un contexto profesional donde esperan conversaciones de negocios.</p>
          </div>

          <div className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl overflow-hidden shadow-md">
            <table className="w-full text-[15px] text-left border-collapse">
              <thead className="bg-[#121214] text-zinc-300">
                <tr>
                  <th className="p-4 border-b border-zinc-800 font-semibold w-1/3">Canal</th>
                  <th className="p-4 border-b border-zinc-800 font-semibold w-1/3">Tasa de respuesta</th>
                  <th className="p-4 border-b border-zinc-800 font-semibold w-1/3">Contexto disponible</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                <tr className="bg-[#1A1A1E] hover:bg-[#1A1A1E]/80 transition-colors">
                  <td className="p-4 font-medium text-white flex items-center gap-2"><MessageCircle size={16} className="text-[#3B82F6]"/> Mensajes de LinkedIn</td>
                  <td className="p-4 text-[#D5B15B] font-bold">10,3%</td>
                  <td className="p-4 text-zinc-400">Perfil completo, foto, conexiones en común</td>
                </tr>
                <tr className="bg-[#1A1A1E] hover:bg-[#1A1A1E]/80 transition-colors">
                  <td className="p-4 font-medium text-white flex items-center gap-2"><Mail size={16} className="text-[#55B467]"/> Email frío</td>
                  <td className="p-4 text-zinc-400">5,1%</td>
                  <td className="p-4 text-zinc-400">Solo nombre y empresa</td>
                </tr>
                <tr className="bg-[#1A1A1E] hover:bg-[#1A1A1E]/80 transition-colors">
                  <td className="p-4 font-medium text-white flex items-center gap-2"><ArrowUpRight size={16} className="text-[#E1306C]"/> InMail de LinkedIn</td>
                  <td className="p-4 text-[#D5B15B] font-bold">18-25%</td>
                  <td className="p-4 text-zinc-400">Perfil completo + evita la conexión previa</td>
                </tr>
                <tr className="bg-[#1A1A1E] hover:bg-[#1A1A1E]/80 transition-colors">
                  <td className="p-4 font-medium text-white flex items-center gap-2"><Phone size={16} className="text-zinc-500"/> Llamadas en frío</td>
                  <td className="p-4 text-zinc-400">2-3%</td>
                  <td className="p-4 text-zinc-400">Solo voz</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Sección 2 */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">2</div> 
            Los números: benchmarks de outreach en LinkedIn para 2025
          </h3>
          <p className="mb-8 text-[16px] text-zinc-300">Antes de meterse en tácticas, necesitás saber cómo se ve "bueno". Estos benchmarks vienen de analizar cientos de miles de campañas de outreach en LinkedIn.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6 shadow-sm">
              <h4 className="text-[17px] font-bold text-white mb-4 flex items-center gap-2"><BarChart size={18} className="text-[#D5B15B]"/> Tasas de respuesta por tipo de mensaje</h4>
              <ul className="space-y-3 text-[15px]">
                <li className="flex justify-between items-center"><span className="text-zinc-300">Solicitud de conexión (personalizada)</span><span className="font-semibold text-white">9,36%</span></li>
                <li className="flex justify-between items-center"><span className="text-zinc-400">Solicitud de conexión (genérica)</span><span className="font-semibold text-zinc-400">5,44%</span></li>
                <li className="flex justify-between items-center"><span className="text-zinc-300">InMail (personalizado)</span><span className="font-semibold text-[#D5B15B]">18-25%</span></li>
                <li className="flex justify-between items-center"><span className="text-zinc-400">InMail (plantilla fría)</span><span className="font-semibold text-zinc-400">6,38%</span></li>
              </ul>
            </div>
            
            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6 shadow-sm">
              <h4 className="text-[17px] font-bold text-white mb-4 flex items-center gap-2"><Target size={18} className="text-[#3B82F6]"/> Tasas de respuesta por puesto</h4>
              <ul className="space-y-3 text-[15px]">
                <li className="flex justify-between items-center"><span className="text-zinc-300">Product Managers</span><span className="font-semibold text-white">10,24%</span></li>
                <li className="flex justify-between items-center"><span className="text-zinc-300">Líderes de Operaciones</span><span className="font-semibold text-white">10,02%</span></li>
                <li className="flex justify-between items-center"><span className="text-zinc-400">Ejecutivos de nivel C</span><span className="font-semibold text-zinc-400">6,98%</span></li>
                <li className="flex justify-between items-center"><span className="text-zinc-400">Profesionales de Ventas</span><span className="font-semibold text-zinc-400">6,32%</span></li>
              </ul>
              <p className="text-[13px] text-zinc-500 mt-4 leading-relaxed">Los ejecutivos reciben más mensajes, así que responden menos. Pero también toman decisiones más rápido. Apuntá en función de tu ciclo de venta.</p>
            </div>
          </div>

          <div className="bg-[#1A1A1E] border border-[#3F3F46] p-5 rounded-xl flex gap-4 shadow-inner mb-8">
            <div className="text-[#D5B15B]"><AlertCircle size={22} /></div>
            <div>
              <p className="text-[15px] text-zinc-300 leading-relaxed"><strong>Dato clave:</strong> las solicitudes de conexión personalizadas obtienen un <strong>72% más de respuestas</strong> que las genéricas. Sin embargo, el 87% de los usuarios de LinkedIn no personaliza sus solicitudes. Esa es tu ventaja competitiva.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-[17px] font-bold text-white mb-4">Tasas de respuesta por industria</h4>
              <div className="bg-[#121214] border border-zinc-800 rounded-xl overflow-hidden">
                <table className="w-full text-[14.5px] text-left">
                  <tbody className="divide-y divide-zinc-800">
                    <tr className="bg-[#1A1A1E]"><td className="p-3 font-medium text-zinc-300">RRHH y Adquisición de Talento</td><td className="p-3 text-right text-[#D5B15B] font-bold">12,08%</td></tr>
                    <tr><td className="p-3 font-medium text-zinc-400">Legal y Servicios Profesionales</td><td className="p-3 text-right text-zinc-300">10,42%</td></tr>
                    <tr className="bg-[#1A1A1E]"><td className="p-3 font-medium text-zinc-400">Salud</td><td className="p-3 text-right text-zinc-300">9,25%</td></tr>
                    <tr><td className="p-3 font-medium text-zinc-400">Retail y Bienes de Consumo</td><td className="p-3 text-right text-zinc-300">9,17%</td></tr>
                    <tr className="bg-[#1A1A1E]"><td className="p-3 font-medium text-zinc-400">Educación</td><td className="p-3 text-right text-zinc-300">7-9%</td></tr>
                    <tr><td className="p-3 font-medium text-zinc-400">Marketing</td><td className="p-3 text-right text-zinc-300">6,40%</td></tr>
                    <tr className="bg-[#1A1A1E]"><td className="p-3 font-medium text-zinc-400">Software y SaaS</td><td className="p-3 text-right text-zinc-500">4,77%</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[13.5px] text-zinc-500 mt-3 leading-relaxed">Software y SaaS tienen las tasas de respuesta más bajas porque todo el mundo prospecta ahí. Si estás apuntando a tecnología, necesitás una personalización más ajustada y mejores mensajes para destacar.</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#121214] border border-[#27272A] rounded-xl p-5">
                <h4 className="text-[16px] font-bold text-white mb-3 flex items-center gap-2"><Calendar size={18} className="text-[#55B467]"/> Mejores días para enviar</h4>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="px-3 py-1 bg-[#1A1A1E] border border-zinc-700 rounded-md text-sm text-white">Martes (6.90%)</span>
                  <span className="px-3 py-1 bg-[#1A1A1E] border border-zinc-700 rounded-md text-sm text-white">Lunes (6.85%)</span>
                  <span className="px-3 py-1 bg-[#1A1A1E] border border-zinc-800 rounded-md text-sm text-zinc-400">Sábado (6.40%) ↓</span>
                </div>
                <p className="text-[14px] text-zinc-400"><strong>Miércoles/Jueves:</strong> 6,62-6,63% | <strong>Viernes:</strong> 6,58%</p>
              </div>
              <div className="bg-[#121214] border border-[#27272A] rounded-xl p-5">
                <h4 className="text-[16px] font-bold text-white mb-3 flex items-center gap-2"><Clock size={18} className="text-[#3B82F6]"/> Mejores horarios del día</h4>
                <ul className="space-y-2 text-[14.5px] text-zinc-300 mb-4">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#D5B15B]"></span> Mañana temprano: 7:30-9:00 AM</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#D5B15B]"></span> Almuerzo: 12:00-2:00 PM</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#D5B15B]"></span> Tarde-noche: 4:00-6:00 PM</li>
                </ul>
                <div className="border-t border-zinc-800 pt-3">
                  <p className="text-[14px] text-zinc-300"><strong>Mejores meses:</strong> enero (7,51%), abril (7,26%), julio (7,00%)</p>
                  <p className="text-[14px] text-zinc-300"><strong>Peores meses:</strong> octubre-diciembre (el Q4 es brutal)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección 3 */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">3</div> 
            Optimización de perfil: tu vendedor silencioso
          </h3>
          <p className="mb-6 text-[16px] text-zinc-300">Tu perfil vende antes de que tu mensaje llegue. Un mal perfil mata un buen outreach.</p>

          <div className="space-y-6">
            <div className="bg-gradient-to-b from-[#121214] to-[#1A1A1E]/50 border border-zinc-800 rounded-2xl p-6 shadow-sm hover:border-zinc-700 transition-colors">
              <h4 className="font-bold text-white mb-3 text-lg flex items-center gap-2"><UserPlus size={18} className="text-[#D5B15B]"/> Foto de perfil: el 74% de las primeras impresiones</h4>
              <p className="text-[15px] text-zinc-300 mb-4">Los perfiles con fotos profesionales reciben 21 veces más vistas que los que no las tienen. Reciben 9 veces más solicitudes de conexión y 36 veces más mensajes. La gente forma juicios sobre tu cara en 100 milisegundos, antes de leer una sola palabra. Tu foto genera confianza o dispara rechazo.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14.5px]">
                <div className="bg-[#121214] border border-[#55B467]/30 p-4 rounded-xl">
                  <p className="font-semibold text-white mb-2 flex items-center gap-2"><CheckCircle2 size={16} className="text-[#55B467]"/> Requisitos de la foto de perfil</p>
                  <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                    <li>Foto profesional (no una selfie, no grupal)</li>
                    <li>La cara ocupa el 60% del cuadro (crítico mobile)</li>
                    <li>Contacto visual directo con la cámara</li>
                    <li>Mínimo 2.000 x 2.000 píxeles (formato PNG)</li>
                    <li>Luz natural, fondo limpio</li>
                    <li>Actualizada en los últimos 2-3 años</li>
                  </ul>
                </div>
                <div className="bg-[#121214] border border-[#E1306C]/30 p-4 rounded-xl">
                  <p className="font-semibold text-white mb-2 flex items-center gap-2"><AlertCircle size={16} className="text-[#E1306C]"/> Qué mata la credibilidad</p>
                  <ul className="list-disc pl-5 space-y-1 text-zinc-400">
                    <li>El 28% marca las fotos grupales recortadas como poco profesionales.</li>
                    <li>El 38% encuentra poco confiables las imágenes suavizadas con IA.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 shadow-sm hover:border-zinc-700 transition-colors">
              <h4 className="font-bold text-white mb-3 text-lg flex items-center gap-2"><LayoutGrid size={18} className="text-[#E1306C]"/> Imagen de banner: bienes raíces gratis</h4>
              <p className="text-[15px] text-zinc-300 mb-4">Tu banner es el primer elemento visual que ven los visitantes. Dimensiones: 1584 x 396 píxeles (o 4200 x 700 para máxima resolución).</p>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <p className="text-[14.5px] text-zinc-400 mb-2">Usalo para:</p>
                  <ul className="list-disc pl-5 space-y-1 text-[14.5px] text-zinc-300">
                    <li>Tu propuesta de valor</li>
                    <li>Prueba social (logos de clientes, resultados)</li>
                    <li>Un llamado a la acción claro</li>
                  </ul>
                </div>
                <div className="flex-1 bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800 flex items-center">
                  <p className="text-[14px] text-zinc-400"><strong className="text-white">Importante:</strong> mantené los elementos críticos centrados. El mobile recorta los bordes.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 shadow-sm hover:border-zinc-700 transition-colors">
              <h4 className="font-bold text-white mb-3 text-lg flex items-center gap-2"><Layers size={18} className="text-[#3B82F6]"/> Headline: 220 caracteres para vender</h4>
              <p className="text-[15px] text-zinc-300 mb-4">No desperdicies tu headline en solo un cargo. Usá la fórmula:</p>
              
              <div className="bg-[#1A1A1E] border border-[#D5B15B]/50 p-4 rounded-xl text-center mb-4 shadow-inner">
                <p className="font-mono text-white text-[15px]">
                  <span className="text-[#3B82F6]">[Rol]</span> <span className="text-zinc-500">|</span> Ayudo a <span className="text-[#E1306C]">[Audiencia objetivo]</span> a lograr <span className="text-[#55B467]">[Resultado específico]</span>
                </p>
              </div>
              
              <div className="text-[14.5px] text-zinc-400 space-y-2 mb-4">
                <p><strong>Ejemplos:</strong></p>
                <ul className="list-disc pl-5 space-y-1 text-[14.5px] text-zinc-300">
                  <li>"Estratega de Outbound | Ayudo a SaaS B2B a agendar 30+ reuniones/mes con outreach frío"</li>
                  <li>"Consultor de Crecimiento | Convierto prospectos fríos en negocios cerrados para startups tecnológicas"</li>
                </ul>
              </div>
              <p className="text-[14px] text-zinc-500">Incluí palabras clave que tus prospectos buscan. La búsqueda de LinkedIn es primitiva: las coincidencias exactas importan.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
                <h4 className="font-bold text-white mb-3 text-[16px]">Sección "Acerca de": el gancho de las 3 líneas</h4>
                <p className="text-[14.5px] text-zinc-400 mb-3">Solo las primeras 2-3 líneas se muestran antes de "Ver más". Esas líneas tienen que enganchar al lector.</p>
                <p className="text-[14px] font-semibold text-white mb-2">Estructura:</p>
                <ol className="list-decimal pl-5 space-y-1 text-[14.5px] text-zinc-300 mb-4">
                  <li>Gancho de apertura (resultado específico o afirmación audaz)</li>
                  <li>A quién ayudás y qué problema resolvés</li>
                  <li>Cómo lo resolvés (tu enfoque)</li>
                  <li>Prueba (resultados, credenciales)</li>
                  <li>Llamado a la acción</li>
                </ol>
                <p className="text-[14px] text-zinc-500 italic">Escribí en primera persona. Nada de lenguaje corporativo. Nada de palabras de moda vacías.</p>
              </div>
              <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
                <h4 className="font-bold text-white mb-3 text-[16px]">Sección "Destacado"</h4>
                <p className="text-[14.5px] text-zinc-400 mb-3">Aparece arriba de tu sección de Experiencia. Visibilidad prioritaria. Usala para:</p>
                <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-zinc-300">
                  <li>Lead magnets o recursos valiosos</li>
                  <li>Casos de estudio con números específicos</li>
                  <li>Tu mejor contenido</li>
                  <li>Link a tu calendario o página de agendamiento</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sección 4 */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">4</div> 
            Estrategia de solicitudes de conexión
          </h3>
          <p className="mb-6 text-[16px] text-zinc-300">LinkedIn te limita a aproximadamente 200 solicitudes de conexión por semana. El número exacto varía según la salud de la cuenta: LinkedIn usa detección por machine learning, no límites fijos.</p>
          
          <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6 shadow-sm mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-[#55B467]" size={20} />
              <h4 className="font-bold text-white text-lg">Límites semanales y prácticas seguras</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[15px] text-zinc-300 mb-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-[#55B467] mt-1 min-w-[16px]"/> <span><strong>Límite semanal:</strong> ~200 solicitudes de conexión</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-[#55B467] mt-1 min-w-[16px]"/> <span><strong>Límite diario seguro:</strong> 20-25 solicitudes para cuentas establecidas</span></li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-[#55B467] mt-1 min-w-[16px]"/> <span><strong>Cuentas nuevas:</strong> empezar con 5-10/día, aumentar un 10-20% semanalmente</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 size={16} className="text-[#55B467] mt-1 min-w-[16px]"/> <span><strong>Conexiones máximas:</strong> 30.000 conexiones de primer grado</span></li>
              </ul>
            </div>
            <p className="text-[14px] text-zinc-400">Si superás los límites demasiado seguido, te vas a comer una restricción de 1 semana. Los usuarios de Premium y Sales Navigator pueden tener límites levemente más altos, pero el algoritmo vigila el comportamiento, no el nivel de suscripción.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-bold text-white mb-4 text-[16px]">El protocolo de calentamiento (cuentas nuevas)</h4>
              <p className="text-[14px] text-zinc-400 mb-4">No hagas outreach en frío en una cuenta nueva o inactiva. LinkedIn marca los picos de actividad inusuales.</p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-[14px] font-bold text-white mb-1">Semana 1-2:</p>
                  <ul className="list-disc pl-5 text-[14px] text-zinc-300">
                    <li>Completá tu perfil por completo</li>
                    <li>Interactuá de forma orgánica (likes, comentarios)</li>
                    <li>Conectá con gente que realmente conocés</li>
                  </ul>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-white mb-1">Semana 3-4:</p>
                  <ul className="list-disc pl-5 text-[14px] text-zinc-300">
                    <li>Aumentá gradualmente solicitudes (10-20% semanal)</li>
                    <li>Empezá con conexiones cálidas (eventos, excompañeros)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-white mb-1">Semana 5 en adelante:</p>
                  <ul className="list-disc pl-5 text-[14px] text-zinc-300">
                    <li>Empezá outreach en frío con solicitudes personalizadas</li>
                    <li>Mantené patrones de comportamiento humano</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6 flex flex-col">
              <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 flex-1">
                <h4 className="font-bold text-white mb-4 text-[16px]">Secuencia de calentamiento previa a la conexión</h4>
                <p className="text-[14px] text-zinc-400 mb-4">Esta secuencia se siente natural. Las solicitudes frías sin interacción previa se sienten como spam.</p>
                <div className="space-y-3 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
                  <div className="relative flex items-center group">
                     <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-zinc-800 bg-[#1A1A1E] text-zinc-400 text-xs font-bold shrink-0 z-10">1</div>
                     <div className="ml-4 bg-[#1A1A1E] px-3 py-2 rounded-xl border border-zinc-800 text-[13.5px] text-zinc-300">Visitá su perfil</div>
                  </div>
                  <div className="relative flex items-center group">
                     <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-zinc-800 bg-[#1A1A1E] text-zinc-400 text-xs font-bold shrink-0 z-10">2</div>
                     <div className="ml-4 text-[13px] text-zinc-500 italic">Esperá 2-6 horas</div>
                  </div>
                  <div className="relative flex items-center group">
                     <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#D5B15B]/50 bg-[#1A1A1E] text-[#D5B15B] text-xs font-bold shrink-0 z-10">3</div>
                     <div className="ml-4 bg-[#1A1A1E] px-3 py-2 rounded-xl border border-zinc-800 text-[13.5px] text-zinc-300">Dale like a uno de sus posteos</div>
                  </div>
                  <div className="relative flex items-center group">
                     <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-zinc-800 bg-[#1A1A1E] text-zinc-400 text-xs font-bold shrink-0 z-10">4</div>
                     <div className="ml-4 text-[13px] text-zinc-500 italic">Esperá 24 horas</div>
                  </div>
                  <div className="relative flex items-center group">
                     <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#55B467]/50 bg-[#1A1A1E] text-[#55B467] text-xs font-bold shrink-0 z-10">5</div>
                     <div className="ml-4 bg-[#1A1A1E] px-3 py-2 rounded-xl border border-[#55B467]/30 text-[13.5px] text-white">Enviá la solicitud de conexión</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6">
            <h4 className="font-bold text-white mb-2 text-[16px]">Plantilla de solicitud de conexión (menos de 300 caracteres)</h4>
            <p className="text-[14.5px] text-zinc-400 mb-4">El punto ideal es 200-250 caracteres. Nunca superes los 300.</p>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <p className="text-[14px] font-semibold text-white mb-2">Estructura:</p>
                <ul className="list-disc pl-5 space-y-1 text-[14.5px] text-zinc-300">
                  <li><strong>Gancho (~50 caracteres):</strong> captá la atención con relevancia</li>
                  <li><strong>Contexto (~100 caracteres):</strong> por qué te estás contactando</li>
                  <li><strong>Valor (~100 caracteres):</strong> qué gana la otra persona</li>
                  <li><strong>CTA suave (~50 caracteres):</strong> próximo paso fácil</li>
                </ul>
              </div>
              <div className="flex-1 bg-[#1A1A1E] p-5 rounded-xl border border-[#D5B15B]/30 relative group">
                <div className="absolute top-3 right-3 text-zinc-500"><MessageSquare size={16}/></div>
                <p className="text-[15px] text-zinc-300 leading-relaxed font-serif italic mt-2">
                  "Hola [Nombre], vi que estás escalando el equipo de SDR en [Empresa]. Vengo trabajando con equipos similares en outbound; me encantaría conectar y compartir ideas. Sin venta, solo interés genuino en lo que están construyendo."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección 5 */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">5</div> 
            La estrategia de DMs de LinkedIn que consigue respuestas
          </h3>
          <p className="mb-6 text-[16px] text-zinc-300">El largo del mensaje importa más de lo que pensás.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="col-span-1 bg-[#121214] border border-[#E1306C]/30 rounded-2xl p-6">
              <h4 className="font-bold text-white mb-2 text-lg">La regla de los 400 caracteres</h4>
              <div className="space-y-4 my-5">
                <div>
                  <div className="flex justify-between text-[13px] mb-1">
                    <span className="text-white">&lt; 400 caracteres</span>
                    <span className="text-[#55B467] font-bold">22% res</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#55B467] w-[22%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[13px] mb-1">
                    <span className="text-zinc-400">400-800 caracteres</span>
                    <span className="text-zinc-500 font-bold">3% res</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-zinc-600 w-[3%]"></div>
                  </div>
                </div>
              </div>
              <p className="text-[14px] text-zinc-300">Esa es una diferencia de 7 veces. Mantenelo corto.</p>
              <p className="text-[13.5px] text-zinc-500 mt-2">Para los InMails, el punto ideal es de 25-50 palabras: 65% más respuestas que los mensajes más largos.</p>
            </div>

            <div className="col-span-1 md:col-span-2 bg-[#121214] border border-zinc-800 rounded-2xl p-6">
              <h4 className="font-bold text-white mb-2 text-lg">Primer mensaje después de conectar</h4>
              <p className="text-[14.5px] text-zinc-400 mb-4">No vendas. Iniciá una conversación.</p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1">
                  <ol className="list-decimal pl-5 space-y-2 text-[14px] text-zinc-300">
                    <li>Agradecé por conectar</li>
                    <li>Hacé referencia a algo específico (posteo, noticia, conexión)</li>
                    <li>Ofrecé valor (idea, recurso, observación)</li>
                    <li>Hacé una pregunta (no pidas una reunión)</li>
                  </ol>
                </div>
                <div className="flex-1 bg-[#1A1A1E] p-4 rounded-xl border border-zinc-700">
                  <p className="text-[14px] text-zinc-300 italic font-serif leading-relaxed">
                    "Gracias por conectar, [Nombre]. Vi tu posteo sobre escalar outbound; el punto sobre la personalización de mensajes realmente me resonó. Vengo viendo patrones similares con los equipos B2B con los que trabajo. Tengo curiosidad: ¿están probando algún enfoque multicanal además de LinkedIn?"
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-white mb-4 text-lg">El framework INSIGHT-DOLOR-PREGUNTA</h4>
              <p className="text-[14.5px] text-zinc-400 mb-6">Para outreach en frío que consigue tasas de respuesta del 15-20%:</p>
              
              <div className="space-y-5">
                <div>
                  <div className="flex gap-3 items-center mb-1">
                    <span className="bg-[#3B82F6]/20 text-[#3B82F6] text-[11px] font-bold px-2 py-0.5 rounded">PASO 1: INSIGHT</span>
                    <span className="text-[14px] font-bold text-white">Arrancá con algo que no saben.</span>
                  </div>
                  <p className="text-[14.5px] text-zinc-400 italic">"La mayoría de los VPs con los que trabajamos no se dan cuenta de que el 60% de su pipeline se estanca porque..."</p>
                </div>
                <div>
                  <div className="flex gap-3 items-center mb-1">
                    <span className="bg-[#E1306C]/20 text-[#E1306C] text-[11px] font-bold px-2 py-0.5 rounded">PASO 2: DOLOR</span>
                    <span className="text-[14px] font-bold text-white">Conectá con su problema.</span>
                  </div>
                  <p className="text-[14.5px] text-zinc-400 italic">"...lo que significa que probablemente estés lidiando con ciclos de venta más largos y más 'no hay decisión'..."</p>
                </div>
                <div>
                  <div className="flex gap-3 items-center mb-1">
                    <span className="bg-[#55B467]/20 text-[#55B467] text-[11px] font-bold px-2 py-0.5 rounded">PASO 3: PREGUNTA</span>
                    <span className="text-[14px] font-bold text-white">No pidas una demo.</span>
                  </div>
                  <p className="text-[14.5px] text-white font-medium italic">"¿Estás viendo patrones similares en tu pipeline?"</p>
                </div>
              </div>
              <p className="text-[14px] text-[#D5B15B] mt-5 font-medium">Por qué funciona: las preguntas inician conversaciones. Los pedidos de reunión disparan resistencia.</p>
            </div>

            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-white mb-2 text-lg">Tácticas de personalización</h4>
              <p className="text-[14.5px] text-zinc-300 mb-4">Los mensajes personalizados con IA tienen una tasa de respuesta del 4,19% vs. 2,60% sin personalizar: una mejora del 61%. Herramientas como Clay para el enriquecimiento de datos pueden automatizar gran parte de esta investigación a escala.</p>
              
              <p className="font-semibold text-white text-[14.5px] mb-2 text-[#55B467]">Fuentes de personalización:</p>
              <ul className="list-disc pl-5 space-y-1 text-[14px] text-zinc-400 mb-5">
                <li>Posteos o comentarios recientes de LinkedIn</li>
                <li>Noticias de la empresa (financiamiento, contrataciones, lanzamientos)</li>
                <li>Conexiones en común</li>
                <li>Experiencias compartidas (misma industria, mismo desafío)</li>
                <li>Contenido con el que interactuaron</li>
              </ul>
              
              <p className="font-semibold text-white text-[14.5px] mb-2 text-[#E1306C]">Lo que NO cuenta como personalización:</p>
              <ul className="list-disc pl-5 space-y-1 text-[14px] text-zinc-400">
                <li>Usar su nombre de pila</li>
                <li>Mencionar el nombre de su empresa</li>
                <li>Cumplidos genéricos ("¡Me encanta lo que están construyendo!")</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sección 6, 7, 8: Secuencias, Voz, Contenido */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">6</div> 
            El ecosistema de conversión (Seguimientos, Voz, Contenido)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Seguimientos */}
            <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 shadow-sm">
              <h4 className="text-[18px] font-bold text-white mb-2 flex items-center gap-2"><Layers className="text-[#3B82F6]" size={20} /> Secuencias de seguimiento que convierten</h4>
              <p className="text-[14.5px] text-zinc-400 mb-4">Un solo mensaje no alcanza. Las tasas de respuesta saltan del 9% al 27% para el sexto seguimiento.</p>
              
              <p className="font-bold text-white mb-3 text-[15px]">La secuencia de 3 toques</p>
              <div className="space-y-3 mb-5">
                <div className="bg-[#1A1A1E] border border-zinc-700 p-3 rounded-xl flex gap-3">
                  <div className="text-[13px] font-bold text-[#3B82F6] w-[60px] pt-0.5">Día 1</div>
                  <div className="text-[13.5px] text-zinc-300 flex-1">(Post-conexión): Agradecé por conectar, ofrecé valor (sin venta) y hacé una pregunta fácil.</div>
                </div>
                <div className="bg-[#1A1A1E] border border-zinc-700 p-3 rounded-xl flex gap-3">
                  <div className="text-[13px] font-bold text-[#D5B15B] w-[60px] pt-0.5">Día 4-5</div>
                  <div className="text-[13.5px] text-zinc-300 flex-1">Compartí un insight o recurso relevante, hacé referencia a algo de actualidad y pregunta liviana.</div>
                </div>
                <div className="bg-[#1A1A1E] border border-zinc-700 p-3 rounded-xl flex gap-3">
                  <div className="text-[13px] font-bold text-[#E1306C] w-[60px] pt-0.5">Día 10-14</div>
                  <div className="text-[13.5px] text-zinc-300 flex-1">Pedido directo pero respetuoso, propuesta de valor clara y llamado a la acción específico.</div>
                </div>
              </div>

              <div className="text-[14px] text-zinc-400 space-y-2">
                <p>• 2-3 seguimientos elevan las respuestas al 20-30%+</p>
                <p>• Secuencias de 3-5 seguimientos consiguen 3x respuestas</p>
                <p>• Seguimientos humanos superan a la IA (3,91% vs 3,48%)</p>
                <p className="mt-3 text-white italic text-[13.5px]"><strong>Dato clave:</strong> la persistencia no molesta cuando cada mensaje suma valor. La repetición sin información nueva es lo que irrita.</p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Voz */}
              <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-white mb-2 text-[18px] flex items-center gap-2"><Mic size={20} className="text-[#D5B15B]"/> Mensajes de voz: el arma secreta</h4>
                <p className="text-[14.5px] text-zinc-300 mb-4">Generan 3 veces más respuestas que el texto. Un usuario reportó pasar de un 4% de respuesta en DMs de texto a un 12% con notas de voz. Otro vio un aumento del 76%.</p>
                
                <div className="grid grid-cols-2 gap-4 text-[14px] mb-4">
                  <div>
                    <p className="font-semibold text-white mb-1">Por qué funciona:</p>
                    <ul className="list-disc pl-4 text-zinc-400 space-y-1">
                      <li>Suma calidez y autenticidad</li>
                      <li>Poca gente los usa</li>
                      <li>Más difícil de ignorar</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Límites & Consejos:</p>
                    <ul className="list-disc pl-4 text-zinc-400 space-y-1">
                      <li>Máximo 60s (ideal &lt; 30s)</li>
                      <li>Solo 1er grado de conexión</li>
                      <li>No leído, ser natural</li>
                    </ul>
                  </div>
                </div>
                <p className="text-[13.5px] text-zinc-500"><strong>Cuándo usarlos:</strong> Para prospectos de alto valor, para reactivar fríos. NO usar si enviás 50+ diarios (no escala).</p>
              </div>

              {/* Sinergia */}
              <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-white mb-2 text-[18px] flex items-center gap-2"><PenTool size={20} className="text-[#55B467]"/> Sinergia entre contenido y outbound</h4>
                <p className="text-[14.5px] text-zinc-300 mb-3">El algoritmo ahora mantiene contenido en feeds 2-3 semanas. El contenido establece credibilidad antes de que llegue tu mensaje.</p>
                
                <div className="bg-[#1A1A1E] p-4 rounded-xl border border-zinc-700">
                  <p className="font-semibold text-white text-[14px] mb-2">El ciclo contenido-outreach:</p>
                  <ol className="list-decimal pl-4 text-[13.5px] text-zinc-400 space-y-1">
                    <li>Publicá contenido sobre problemas de prospectos (3-5x/semana).</li>
                    <li>Interactuá con los comentarios.</li>
                    <li>Conectá con la gente que interactúa.</li>
                    <li>Hacé referencia a tu contenido en el outreach.</li>
                  </ol>
                  <p className="text-[13px] text-zinc-300 italic mt-3">"Vi que le diste like a mi posteo sobre métricas; tengo curiosidad si están lidiando con desafíos similares en [Empresa]."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección 9 y 10: Herramientas y Rutina */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">7</div> 
            Ejecución diaria y automatización
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-white mb-3 text-[18px] flex items-center gap-2"><Bot size={20} className="text-[#E1306C]"/> Automatización (sin que te banéen)</h4>
              <p className="text-[14.5px] text-zinc-300 mb-4">El 23% de los usuarios de automatización sufre restricciones dentro de 90 días.</p>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-white text-[14.5px] mb-1">Límites seguros:</p>
                  <ul className="list-disc pl-5 text-[14px] text-zinc-400 space-y-1">
                    <li>10-15 solicitudes personalizadas/día con demoras aleatorias</li>
                    <li>100 solicitudes/semana como máximo</li>
                    <li>Esperar 2-4 semanas orgánicas en cuentas nuevas</li>
                    <li>Usar herramientas cloud (más seguras que extensiones)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-[#E1306C] text-[14.5px] mb-1">Qué marca sospecha:</p>
                  <ul className="list-disc pl-5 text-[14px] text-zinc-400 space-y-1">
                    <li>Solicitudes disparadas rápido, mensajes idénticos</li>
                    <li>Picos de actividad (ej: 5 a 100 de un día a otro)</li>
                    <li>Horarios inusuales para tu zona horaria</li>
                    <li>Tasas altas de rechazo</li>
                  </ul>
                </div>
                <div className="bg-[#1A1A1E] p-3 rounded-xl border border-zinc-700 text-[13.5px]">
                  <p className="text-white font-semibold mb-1">Social Selling Index (SSI)</p>
                  <p className="text-zinc-400">Puntaje alto (&gt;70) = crean 45% más de oportunidades. Mide: marca, encontrar gente, interactuar, construir relaciones.</p>
                </div>
                <p className="text-[13.5px] text-zinc-300 italic"><strong>Sales Navigator:</strong> LinkedIn gratis + estrategia le gana a herramientas caras sin estrategia.</p>
              </div>
            </div>

            <div className="bg-[#121214] border border-[#D5B15B]/30 rounded-2xl p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D5B15B]/5 rounded-full blur-2xl"></div>
              <h4 className="font-bold text-white mb-4 text-[18px] flex items-center gap-2 relative z-10"><Clock size={20} className="text-[#D5B15B]"/> La rutina diaria en LinkedIn</h4>
              <p className="text-[14.5px] text-zinc-300 mb-5 relative z-10">Esto es exactamente lo que hice para construir $35K/mes.</p>
              
              <div className="space-y-4 relative z-10">
                <div className="bg-[#1A1A1E] border border-zinc-800 p-4 rounded-xl">
                  <p className="font-bold text-[#3B82F6] text-[15px] mb-2">Bloque de mañana (30-45 min)</p>
                  <ul className="text-[14px] text-zinc-300 space-y-2">
                    <li><strong className="text-white">1. Revisar (5m):</strong> notificaciones, respuestas.</li>
                    <li><strong className="text-white">2. Interactuar (10-15m):</strong> comentar/dar like en posteos.</li>
                    <li><strong className="text-white">3. Solicitudes (10-15m):</strong> 10-15 personalizadas a ICP.</li>
                    <li><strong className="text-white">4. DMs primer contacto (10m):</strong> a conexiones de ayer.</li>
                  </ul>
                </div>
                <div className="bg-[#1A1A1E] border border-zinc-800 p-4 rounded-xl">
                  <p className="font-bold text-[#55B467] text-[15px] mb-2">Bloque de tarde (15-20 min)</p>
                  <ul className="text-[14px] text-zinc-300 space-y-2">
                    <li><strong className="text-white">1. Seguimientos (10m):</strong> revisar no respondidos, aportar valor.</li>
                    <li><strong className="text-white">2. Voz (5-10m):</strong> 3-5 notas a prospectos de alto valor.</li>
                  </ul>
                </div>
                <div className="text-[13.5px] text-zinc-400">
                  <strong>Lunes:</strong> solicitudes | <strong>Mar-Mié:</strong> pico mensajes | <strong>Jue:</strong> seguimientos | <strong>Vie:</strong> contenido/liviano
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección 11: FAQs */}
        <div className="border-t border-zinc-800 pt-12">
          <h3 className="text-2xl font-bold text-white mb-8">Preguntas frecuentes</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-[#121214] p-5 rounded-2xl border border-zinc-800">
               <h5 className="text-white font-bold mb-2 text-[15px]">¿Cuántas solicitudes de conexión puedo enviar por semana?</h5>
               <p className="text-[14px] text-zinc-400 leading-relaxed">LinkedIn permite aproximadamente 200/semana (varía según la salud de la cuenta). Límite diario seguro: 20-25 (establecidas). Cuentas nuevas: 5-10/día e ir subiendo 10-20% semanal.</p>
             </div>
             <div className="bg-[#121214] p-5 rounded-2xl border border-zinc-800">
               <h5 className="text-white font-bold mb-2 text-[15px]">¿Cuál es el largo ideal para un mensaje?</h5>
               <p className="text-[14px] text-zinc-400 leading-relaxed">Bajo los 400 caracteres para una tasa de respuesta del 22%. Los mensajes de 400-800 caen al 3%. Para InMails, el punto ideal es 25-50 palabras.</p>
             </div>
             <div className="bg-[#121214] p-5 rounded-2xl border border-zinc-800">
               <h5 className="text-white font-bold mb-2 text-[15px]">¿Debería personalizar cada solicitud?</h5>
               <p className="text-[14px] text-zinc-400 leading-relaxed">Sí. Obtienen un 72% más de respuestas. Dado que el 87% no personaliza, es una ventaja competitiva. Referenciá un post, conexión común o noticia.</p>
             </div>
             <div className="bg-[#121214] p-5 rounded-2xl border border-zinc-800">
               <h5 className="text-white font-bold mb-2 text-[15px]">¿Los mensajes de voz son efectivos?</h5>
               <p className="text-[14px] text-zinc-400 leading-relaxed">Sí, 3x más respuestas. Saltan del 4% al 12%. Solo funcionan para conexiones de 1er grado y limitados a 60s. Usalos para alto valor.</p>
             </div>
             <div className="bg-[#121214] p-5 rounded-2xl border border-zinc-800">
               <h5 className="text-white font-bold mb-2 text-[15px]">¿Cuál es el mejor día para enviar?</h5>
               <p className="text-[14px] text-zinc-400 leading-relaxed">Martes (6,90%) y lunes (6,85%). Horarios: 7:30-9 AM, 12-2 PM, 4-6 PM. Evitá el Q4 (oct-dic).</p>
             </div>
             <div className="bg-[#121214] p-5 rounded-2xl border border-zinc-800">
               <h5 className="text-white font-bold mb-2 text-[15px]">¿InMail vs. solicitud de conexión?</h5>
               <p className="text-[14px] text-zinc-400 leading-relaxed">InMails responden más (18-25%) y no requieren aceptación, pero cuestan créditos y no construyen red a largo plazo. Usá InMails para directivos senior.</p>
             </div>
          </div>
        </div>

        {/* Sección 12: Puntos clave finales */}
        <div className="bg-[#1A1A1E] border border-zinc-700 p-8 rounded-3xl shadow-xl mt-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D5B15B]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <h3 className="text-2xl font-bold text-white mb-6">Puntos clave & Resumen de La Matemática</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <ul className="list-disc pl-5 space-y-3 text-[14.5px] text-zinc-300">
              <li><strong>Doble de conversión:</strong> Mensajes de LinkedIn (10,3%) vs email frío (5,1%).</li>
              <li><strong>Corto gana:</strong> Menos de 400 caracteres consiguen 22% de respuesta.</li>
              <li><strong>Personalización:</strong> 72% más respuestas (el 87% de usuarios no lo hace).</li>
              <li><strong>Perfil como vendedor:</strong> La foto determina el 74% de impresiones.</li>
              <li><strong>Formatos:</strong> Los mensajes de voz generan 3x respuestas.</li>
              <li><strong>Seguimientos:</strong> 2-3 toques elevan respuestas al 20-30%.</li>
              <li><strong>Contenido:</strong> Publicar 3-5x/semana calienta al prospecto.</li>
            </ul>
            
            <div className="bg-[#121214] border border-zinc-800 p-6 rounded-2xl flex flex-col justify-center">
              <h4 className="font-bold text-white text-lg mb-4 text-center">La Matemática de $35K/mes</h4>
              <ul className="space-y-3 text-[15px] text-zinc-300 font-mono mb-4">
                <li className="flex justify-between border-b border-zinc-800 pb-2"><span>20 DMs/día × 10% res</span> <span className="text-white">2 res/día</span></li>
                <li className="flex justify-between border-b border-zinc-800 pb-2"><span>2 res × 50% pos</span> <span className="text-white">1 calificada/día</span></li>
                <li className="flex justify-between border-b border-zinc-800 pb-2"><span>5 cualif/sem × 25% req</span> <span className="text-white">1.25 reqs/sem</span></li>
                <li className="flex justify-between font-bold text-white"><span>5 reqs/mes × 20% cierre</span> <span className="text-[#D5B15B]">1 cliente/mes</span></li>
              </ul>
              <p className="text-[13.5px] text-zinc-500 text-center font-sans mt-2">
                Con LTV de $5K = $5K/mes nuevos. Escalá a 30 DMs, componé con el tiempo, llegás a $35K/mes.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-[18px] text-white font-bold">La consistencia le gana al volumen cuando tu perfil y mensajería están afinados.</p>
          </div>
        </div>

      </div>
    ) : (
      <div className="text-zinc-400 text-center py-20 bg-[#121214] rounded-2xl border border-zinc-800">
        <p>Has seleccionado la vista resumida, pero en este caso el texto completo es requerido por el usuario.</p>
        <button 
          onClick={() => setIsSummary(false)}
          className="mt-4 px-4 py-2 bg-[#D5B15B] text-black font-semibold rounded-lg hover:bg-[#E5C16B] transition-colors"
        >
          Ver artículo completo
        </button>
      </div>
    )}
  </div>
  );
};
const LinkedInIdeasPage = ({ setActivePageId, setSplitPageId }: { setActivePageId: (id: string) => void, setSplitPageId?: (id: string) => void }) => {
  const [isSummary, setIsSummary] = useState(false);

  return (
  <div className="max-w-4xl mx-auto w-full pb-20 animate-in fade-in duration-300">
    <div className="flex items-center justify-between mb-12">
      <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
        <ArcadiaLogo />
        <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_parent')}>Arcadia</span>
        <span className="text-zinc-700">/</span>
        <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_parent')}>Content</span>
      </div>
      <div className="flex items-center bg-[#1A1A1E] rounded-lg p-1 border border-zinc-800">
        <button 
          onClick={() => setIsSummary(false)}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${!isSummary ? 'bg-[#27272A] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          Completo
        </button>
        <button 
          onClick={() => setIsSummary(true)}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${isSummary ? 'bg-[#27272A] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          Resumido
        </button>
      </div>
    </div>
    
    <div className="flex items-start gap-5 mb-10">
      <div className="border border-zinc-700/50 p-3.5 rounded-2xl text-zinc-300 bg-[#1A1A1E] mt-1 shadow-xl">
        <Lightbulb size={28} strokeWidth={1.5} />
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">Sistema de generación de ideas para contenido en LinkedIn</h2>
        <p className="text-zinc-400 text-lg">Resumen del proceso de tres pasos</p>
      </div>
    </div>

    {/* Video Embed */}
    <div className="w-full aspect-video rounded-3xl overflow-hidden border border-[#27272A]/80 shadow-2xl mb-16 bg-[#121214]">
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/K7PLZb_zLvw" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div>

    {/* La premisa central */}
    <div className="border border-[#4A3B18]/60 bg-[#2A2110]/30 rounded-3xl p-8 mb-16 shadow-2xl relative overflow-hidden">
      <div className="absolute -top-10 -right-10 text-[#4A3B18]/20 rotate-12">
        <Target size={180} strokeWidth={1} />
      </div>
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-[#E8CD82] mb-4 flex items-center gap-2">
          <Target size={20}/> La premisa central
        </h3>
        <p className="text-[16px] text-[#E8CD82]/90 leading-relaxed">
          {isSummary
            ? "La mayoría del contenido en LinkedIn no funciona por falta de una buena idea. Con ideas únicas e interesantes, el engagement y la viralidad son sencillos. El autor presenta 3 pasos para generar ideas probadas."
            : "El autor del video sostiene que la mayoría del contenido en LinkedIn no funciona porque la idea de base no es lo suficientemente fuerte. Basándose en su experiencia (más de 6.000 publicaciones escritas y más de 200 clientes asesorados), afirma que cuando una idea es a la vez única e interesante, todo lo demás —el engagement, la viralidad y la generación de leads— se vuelve mucho más sencillo. A partir de esto, presenta un proceso de tres pasos para pasar de \"no tener idea de qué publicar\" a contar con una amplia variedad de contenido original con potencial viral y capacidad de atraer al cliente correcto."}
        </p>
      </div>
    </div>

    {/* Paso 1 */}
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">1</div> 
        Paso 1: Búsqueda avanzada en Twitter/X
      </h3>
      <p className="text-[16px] text-zinc-400 mb-8 leading-relaxed">
        {isSummary 
          ? "Usar la búsqueda avanzada de Twitter para encontrar contenido viral antes de que llegue a LinkedIn."
          : "El primer método consiste en usar la función de búsqueda avanzada de Twitter, una herramienta que, según el autor, es ideal para encontrar ideas porque esa red se mueve más rápido que LinkedIn: muchas veces ve publicaciones triunfar en Twitter semanas antes de que el mismo contenido se vuelva viral en LinkedIn."}
      </p>
      
      <div className={isSummary ? "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 items-start" : "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"}>
        <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.5rem] p-7 shadow-lg">
           <h4 className="font-semibold text-white mb-5 flex items-center gap-2 text-lg">
             <Settings size={20} className="text-zinc-400"/> El procedimiento es el siguiente:
           </h4>
           <ul className="space-y-4">
             <li className="flex gap-3 text-[14.5px] text-zinc-300 leading-relaxed">
               <div className="w-1.5 h-1.5 rounded-full bg-[#D5B15B] mt-2 shrink-0"/> 
               <span>{isSummary ? "Buscar palabra clave del nicho (ej: 'AI SEO')." : "Buscar un término relacionado con el nicho propio (en el ejemplo, usa \"AI SEO\" porque el rubro SEO está muy saturado y comoditizado; si el método funciona ahí, sirve para cualquier nicho: coaching, SaaS, agencias, consultoría, freelance, etc.)."}</span>
             </li>
             <li className="flex gap-3 text-[14.5px] text-zinc-300 leading-relaxed">
               <div className="w-1.5 h-1.5 rounded-full bg-[#D5B15B] mt-2 shrink-0"/> 
               <span>{isSummary ? "Ir a búsqueda avanzada." : "Entrar a la búsqueda avanzada (tres puntos > \"advanced search\")."}</span>
             </li>
             <li className="flex gap-3 text-[14.5px] text-zinc-300 leading-relaxed">
               <div className="w-1.5 h-1.5 rounded-full bg-[#D5B15B] mt-2 shrink-0"/> 
               <span>{isSummary ? "Filtrar: idioma (inglés), min 50 likes y fechas recientes." : "Filtrar por idioma (inglés), por una cantidad mínima de likes (usa 50 como ejemplo) para asegurar que el contenido tenga algo de tracción, y por un rango de fechas reciente para que las ideas sean frescas."}</span>
             </li>
             <li className="flex gap-3 text-[14.5px] text-zinc-300 leading-relaxed">
               <div className="w-1.5 h-1.5 rounded-full bg-[#D5B15B] mt-2 shrink-0"/> 
               <span>{isSummary ? "Excluir: 'DM', 'reply', 'comment' para evitar spam." : "Excluir palabras como \"DM\", \"reply\" o \"comment\" para filtrar los posteos que en realidad son lead magnets o ganchos de venta, y así quedarse con una lista más limpia de ideas genuinas."}</span>
             </li>
             <li className="flex gap-3 text-[14.5px] text-zinc-300 leading-relaxed">
               <div className="w-1.5 h-1.5 rounded-full bg-[#D5B15B] mt-2 shrink-0"/> 
               <span>{isSummary ? "Elegir ideas frescas con engagement." : "Revisar los resultados buscando dos características: que sea algo que todavía no vio en LinkedIn (es decir, fresco y novedoso) y que ya tenga engagement comprobado."}</span>
             </li>
           </ul>
        </div>
        <div className="flex flex-col gap-6">
            {!isSummary && (
              <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.5rem] p-7 shadow-lg">
                 <h4 className="font-semibold text-white mb-3 flex items-center gap-2 text-lg"><FileText size={20} className="text-zinc-400"/> Ejemplos concretos</h4>
                 <p className="text-[14.5px] text-zinc-400 leading-relaxed">Pone dos ejemplos concretos: un posteo crítico sobre una herramienta de IA llamada "AI Meridian", acusándola de generar contenido de baja calidad ("AI slop"), y otro que usa el nombre de Sam Altman como gancho, vinculándolo a la supuesta "muerte" del SEO tradicional para hablar de la transición hacia la búsqueda con IA y el GEO (Generative Engine Optimization).</p>
              </div>
            )}
            <div className={`bg-[#1A1A1E] border border-[#3F3F46]/60 rounded-[1.5rem] p-7 relative overflow-hidden shadow-lg group hover:border-[#D5B15B]/40 transition-colors ${isSummary ? 'flex-1 flex flex-col justify-center' : ''}`}>
                <div className="absolute -bottom-4 -right-4 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Database size={100}/></div>
                <h4 className="font-semibold text-white mb-3 text-lg flex items-center gap-2"><Database size={20} className="text-[#D5B15B]"/> Centralización</h4>
                <p className="text-[14.5px] text-zinc-300 relative z-10 leading-relaxed">{isSummary ? "Guardar los links originales junto con el ángulo propio en una planilla." : "Estas ideas las va guardando en una planilla de cálculo armada especialmente para centralizar el material: copia el link del posteo original y anota su propia idea o ángulo para adaptarlo a LinkedIn. Aclara que esta técnica no se limita al SEO: el mismo proceso de búsqueda sirve para cualquier palabra clave del nicho (da el ejemplo de \"metabolismo\" para un coach de fitness) o para cualquier tema, como marketing B2B."}</p>
            </div>
        </div>
      </div>
    </div>

    {/* Paso 2 */}
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">2</div> 
        Paso 2: Analizar transcripciones de llamadas de venta con IA
      </h3>
      <p className="text-[16px] text-zinc-400 mb-8 leading-relaxed">
        {isSummary 
          ? "El objetivo es generar leads reales identificando el \"momento de lamparita\" (light bulb moment) en llamadas de ventas."
          : "El segundo método apunta no solo a likes sino a generación de leads reales. La idea es identificar lo que el autor llama el \"momento de lamparita\" (light bulb moment): el instante dentro de una llamada de ventas en el que, después de que el prospecto cuenta su situación y sus problemas, el vendedor dice algo que cambia su perspectiva y lo acerca mucho más a la decisión de compra."}
      </p>

      <div className={isSummary ? "flex flex-col gap-6 mb-8" : "grid grid-cols-1 md:grid-cols-12 gap-6 mb-8"}>
        <div className={`${isSummary ? '' : 'col-span-1 md:col-span-7 '}bg-[#121214] border border-[#27272A]/80 rounded-[1.5rem] p-7 shadow-lg`}>
          <h4 className="font-semibold text-white mb-5 flex items-center gap-2 text-lg">
             <ListOrdered size={20} className="text-zinc-400"/> El proceso práctico:
          </h4>
          <ul className="space-y-4">
             <li className="flex gap-3 text-[14.5px] text-zinc-300 leading-relaxed">
               <div className="w-5 h-5 rounded-md bg-[#27272A] flex items-center justify-center shrink-0 mt-0.5 text-xs text-zinc-400">1</div> 
               <span>{isSummary ? "Descargar transcripciones de llamadas." : "Descargar las transcripciones de las llamadas de venta desde la herramienta de notas con IA que se utilice."}</span>
             </li>
             <li className="flex gap-3 text-[14.5px] text-zinc-300 leading-relaxed">
               <div className="w-5 h-5 rounded-md bg-[#27272A] flex items-center justify-center shrink-0 mt-0.5 text-xs text-zinc-400">2</div> 
               <span>{isSummary ? "Usar ChatGPT/Claude para identificar y extraer los 'momentos de lamparita'." : "Subirlas a ChatGPT o Claude junto con un prompt específico que pide identificar el \"momento de lamparita\", describir en qué consiste, ponerle un nombre, y detallar el estado previo del cliente, el momento del cambio de perspectiva y el estado posterior, listando todos los momentos así encontrados."}</span>
             </li>
          </ul>
        </div>
        {!isSummary && (
          <div className="col-span-1 md:col-span-5 bg-gradient-to-br from-[#121214] to-[#1A1A1E] border border-[#D5B15B]/30 rounded-[1.5rem] p-7 shadow-lg relative overflow-hidden">
            <div className="absolute top-4 right-4 text-[#D5B15B]/20"><Lightbulb size={48}/></div>
            <h4 className="font-semibold text-[#D5B15B] mb-3 text-lg flex items-center gap-2">Ejemplo del video</h4>
            <p className="text-[14px] text-zinc-300 leading-relaxed relative z-10">
              En el ejemplo del video, sobre ocho momentos identificados elige uno en particular: un prospecto comentaba que el contenido genérico de la competencia "podría publicarlo cualquier cuenta" porque no diferenciaba en nada; el autor le respondió mostrándole cómo agregar especificidad y autoridad (mencionar la cantidad exacta de auditorías hechas, el tipo de clientes atendidos, hallazgos concretos), lo cual le permitía hablarle directamente a su cliente ideal (ICP). Ese fue el "click" del prospecto.
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className={`border-l-4 border-[#3F3F46] bg-[#121214] rounded-r-[1.5rem] p-6 shadow-sm ${isSummary ? 'w-full' : 'flex-1'}`}>
          <h4 className="font-semibold text-white mb-2 flex items-center gap-2"><Target size={16} className="text-zinc-400"/> {isSummary ? "Contenido de conversión" : "Punto importante"}</h4>
          <p className="text-[14.5px] text-zinc-400 leading-relaxed">
            {isSummary 
              ? "Este contenido rara vez se vuelve viral; es 'contenido de conversión' enfocado en prospectos con intención de compra."
              : "Aclara un punto importante: este tipo de contenido basado en llamadas de venta generalmente no se vuelve viral, porque solo resuena con una porción pequeña de la audiencia que ya está atravesando ese problema específico y en una mentalidad cercana a la compra. Por eso lo distingue como \"contenido de conversión\" frente al \"contenido de impresión\" (el que busca alcance masivo)."}
          </p>
        </div>
        {!isSummary && (
          <div className="flex-1 bg-[#1A1A1E] border border-[#27272A] rounded-[1.5rem] p-6 flex flex-col justify-center items-center text-center shadow-lg group">
            <div className="w-12 h-12 rounded-full bg-[#D5B15B]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap size={24} className="text-[#D5B15B]" />
            </div>
            <h4 className="font-semibold text-white mb-2">Automatización (Zapier)</h4>
            <p className="text-[13px] text-zinc-400 leading-relaxed">
              Por último, menciona que automatizó todo este proceso con Zapier: el sistema ingresa las llamadas de venta, sube la transcripción a Drive, agrega los datos a una planilla, procesa todo con IA y finalmente envía un mensaje privado a un canal de Slack para que todo el equipo tenga acceso casi inmediato a los insights.
            </p>
          </div>
        )}
      </div>
    </div>

    {/* Paso 3 */}
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">3</div> 
        Paso 3: "Theme pages" de Instagram
      </h3>
      <p className="text-[16px] text-zinc-400 mb-8 leading-relaxed">
        {isSummary 
          ? "Buscar contenido con alto potencial viral en 'theme pages' de Instagram y portarlo a LinkedIn."
          : "El tercer método busca específicamente contenido con alto potencial de viralidad y alcance para atraer nueva audiencia. Se apoya en un formato que fue muy popular en Instagram durante la década de 2010 pero que, según el autor, está prácticamente olvidado por quienes hacen contenido en LinkedIn: las \"theme pages\" (páginas temáticas)."}
      </p>

      <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.5rem] p-8 mb-8 shadow-lg">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
             <h4 className="font-semibold text-white mb-3 flex items-center gap-2"><Instagram size={20} className="text-[#E1306C]"/> Theme Pages</h4>
             <p className="text-[14.5px] text-zinc-300 leading-relaxed mb-4">
               {isSummary 
                 ? "Tomar ideas virales de páginas temáticas de Instagram, adaptarlas y conectarlas con tu producto/servicio."
                 : "Estas páginas funcionan como marcas de medios: generan contenido muy viral y de alcance amplio con el objetivo de sumar seguidores, y luego monetizan vendiendo espacios publicitarios o de sponsoreo dentro de sus publicaciones. La estrategia consiste en tomar esas ideas virales y \"portarlas\" a LinkedIn, adaptándolas y conectándolas con el producto o servicio propio."}
             </p>
          </div>
          {!isSummary && (
            <div className="w-full md:w-[320px] bg-[#1A1A1E] rounded-xl p-5 border border-[#3F3F46]/50">
               <h4 className="font-semibold text-white mb-2 text-sm flex items-center gap-2"><TrendingUp size={16} className="text-[#55B467]"/> Caso real de éxito</h4>
               <p className="text-[13px] text-zinc-400 leading-relaxed">
                 Da un ejemplo de un caso real de este método: un posteo cuya idea se tomó de Instagram, se adaptó y se publicó en LinkedIn, logrando 117 mil impresiones, 287 reacciones, 513 comentarios, 35 guardados, 24 reposteos (o "cents", posiblemente "sends"), 316 visitas al perfil y 66 nuevos seguidores, todo a partir de una sola publicación "tomada prestada" de otro lugar.
               </p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-[#1A1A1E] border border-[#27272A] rounded-[1.5rem] p-7 shadow-lg">
        <h4 className="font-semibold text-white mb-5 text-lg flex items-center gap-2">
          <ListOrdered size={20} className="text-[#D5B15B]"/> El procedimiento:
        </h4>
        <div className="space-y-5">
           <div className="flex gap-4 items-start bg-[#121214] p-4 rounded-xl border border-[#27272A]/50">
             <div className="mt-1"><Search size={18} className="text-zinc-400"/></div>
             <p className="text-[14.5px] text-zinc-300 leading-relaxed">{isSummary ? "Buscar palabra clave en Instagram vinculada a tu cliente ideal." : "Buscar en Instagram una palabra clave vinculada al cliente ideal o al producto/servicio que se vende (ejemplos: \"entrepreneur\" para coaching de negocios, \"health\" para fitness, \"advertising\" para servicios de marketing)."}</p>
           </div>
           <div className="flex gap-4 items-start bg-[#121214] p-4 rounded-xl border border-[#27272A]/50">
             <div className="mt-1"><Users size={18} className="text-zinc-400"/></div>
             <p className="text-[14.5px] text-zinc-300 leading-relaxed">{isSummary ? "Encontrar las theme pages relevantes." : "Esto lleva a encontrar las theme pages del rubro (pone como ejemplo una cuenta llamada \"entrepreneur insights\", con posteos que llegan a cientos de miles de likes)."}</p>
           </div>
           <div className="flex gap-4 items-start bg-[#121214] p-4 rounded-xl border border-[#27272A]/50">
             <div className="mt-1"><Target size={18} className="text-[#D5B15B]"/></div>
             <p className="text-[14.5px] text-zinc-300 leading-relaxed">{isSummary ? "Detectar formatos virales (ej: 'brandjack' o tomas controversiales)." : "Detecta que los formatos más virales dentro de estas páginas suelen ser dos: el \"brandjack\" (apropiarse de una marca o caso conocido para captar atención, como un posteo sobre cómo LEGO estuvo a punto de quebrar por una deuda multimillonaria y logró un gran \"comeback\") y las \"tomas controversiales\" (como el caso de un escándalo de trading que casi hace quebrar a un banco histórico francés)."}</p>
           </div>
           <div className="flex gap-4 items-start bg-[#121214] p-4 rounded-xl border border-[#27272A]/50">
             <div className="mt-1"><CheckSquare size={18} className="text-[#55B467]"/></div>
             <p className="text-[14.5px] text-zinc-300 leading-relaxed">{isSummary ? "Conectar esa idea con tu producto o servicio propio." : "El paso clave es conectar esa idea encontrada con el producto o servicio propio. En el ejemplo, el caso de LEGO —vinculado a cómo recuperaron dinero a través de colaboraciones— lo adapta para hablar de patrocinios de newsletters o partnerships en anuncios de Facebook, ya que temáticamente conecta bien. Otro ejemplo que menciona es un artículo de la revista Men's Health sobre por qué estrellas de Hollywood y la WWE están bajando de peso, que podría adaptarse para contenido relacionado con pérdida de peso."}</p>
           </div>
           <div className="flex gap-4 items-start bg-[#121214] p-4 rounded-xl border border-[#27272A]/50">
             <div className="mt-1"><Database size={18} className="text-zinc-400"/></div>
             <p className="text-[14.5px] text-zinc-300 leading-relaxed">Todas estas ideas también se van copiando a la misma planilla de ideas.</p>
           </div>
        </div>
      </div>
    </div>

    {/* Cierre */}
    <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6 text-center shadow-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-[#D5B15B]"></div>
      <h3 className="text-xl font-bold text-white mb-3">Cierre</h3>
      <p className="text-[15px] text-zinc-400 leading-relaxed max-w-2xl mx-auto">
        {isSummary 
          ? "El próximo paso es usar 'hooks' y formatos comprobados para LinkedIn, que el autor compartirá en un próximo video."
          : "El autor remarca que, aun teniendo ideas nuevas y comprobadas, todavía falta un elemento más para que el contenido funcione: usar los \"hooks\" (ganchos) y formatos de LinkedIn que él mismo probó en más de 100 cuentas. Anuncia que en un próximo video va a compartir una plantilla lista para copiar y pegar, que permite aplicar directamente las ideas generadas con este sistema."}
      </p>
    </div>
  </div>
  );
};

const LinkedInSummaryView = () => (
  <div className="animate-in fade-in duration-300">
    <div className="flex items-start gap-5 mb-10">
      <div className="border border-zinc-700/50 p-3.5 rounded-2xl text-zinc-300 bg-[#1A1A1E] mt-1 shadow-xl">
        <PenTool size={28} strokeWidth={1.5} />
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">La parte de creación de contenido en LinkedIn</h2>
        <p className="text-zinc-400 text-[16px] leading-relaxed">Dentro del "embudo híbrido orgánico a pago" que presentan Ammon y Paulo (cofundadores de The Media Engine), hay una etapa específica dedicada pura y exclusivamente a la generación y escritura de contenido para LinkedIn.</p>
      </div>
    </div>

    {/* Etapa 3 */}
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">3</div> 
        La ideación de contenido (minería de fuentes)
      </h3>
      <p className="text-[16px] text-zinc-400 mb-8 leading-relaxed">
        El autor explica que la idea de un posteo es lo que determina si el contenido funciona o no, así que como agencia tuvieron que sistematizar una forma de generar ideas únicas e interesantes de manera constante.
      </p>
      
      <div className="flex flex-col gap-5">
        <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><Phone size={18}/></div>
            <h4 className="font-semibold text-white text-lg">1. Llamadas de venta</h4>
          </div>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            Analizan con IA cada llamada, buscando el "light bulb moment": cuando el prospecto cambia de perspectiva tras algo que dice el vendedor.
          </p>
        </div>
        
        <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><Bot size={18}/></div>
            <h4 className="font-semibold text-white text-lg">2. Prompting sobre dolores</h4>
          </div>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            La IA identifica puntos de dolor, causas, tendencias e identifica el vocabulario del ICP (ej: "founder", "CEO").
          </p>
        </div>
        
        <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><FileSearch size={18}/></div>
            <h4 className="font-semibold text-white text-lg">3. Procesos internos</h4>
          </div>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            Revisar metodologías. Los frameworks para educar al equipo interno suelen funcionar como contenido educativo público.
          </p>
        </div>
        
        <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><Target size={18}/></div>
            <h4 className="font-semibold text-white text-lg">4. Posts de la competencia</h4>
          </div>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            Armar lista de competidores buscando "ideas resonantes". Armar feed curado para ver posteos recientes.
          </p>
        </div>
        
        <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><TrendingUp size={18}/></div>
            <h4 className="font-semibold text-white text-lg">5. Ideas en tendencia</h4>
          </div>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            Combinar tendencias del momento en un mismo gancho para viralizarse fuerte (ej: GPT-5 reemplazando ghostwriters).
          </p>
        </div>

        <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><Copy size={18}/></div>
            <h4 className="font-semibold text-white text-lg">6. Brandjacking</h4>
          </div>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            Aprovechar marcas conocidas y populares para anclar el contenido propio y conectar con audiencias más grandes.
          </p>
        </div>

        <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><Compass size={18}/></div>
            <h4 className="font-semibold text-white text-lg">7. Medios de la industria</h4>
          </div>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            Identificar fuentes de contenido que consume el cliente, resumirlas con IA y rescatar ideas (ej: resumir un podcast dando crédito).
          </p>
        </div>

        <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><Mic size={18}/></div>
            <h4 className="font-semibold text-white text-lg">8. Entrevistas internas</h4>
          </div>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            Entrevistar al "thought leader" sobre las ideas ganadoras. Usar preguntas guiadas hacia ideas que van a funcionar.
          </p>
        </div>
      </div>
    </div>

    {/* Etapa 4 */}
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">4</div> 
        Los tres pilares de contenido
      </h3>
      <p className="text-[16px] text-zinc-400 mb-8 leading-relaxed">
        Hay que pensar exactamente qué necesita ver el cliente ideal para creer que uno tiene la ventaja y descubrir que existes.
      </p>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-gradient-to-b from-[#121214] to-[#121214]/50 border border-[#27272A] rounded-[1.5rem] p-8 shadow-lg relative group">
          <div className="absolute top-0 right-8 w-16 h-1 bg-[#55B467] rounded-b-md"></div>
          <div className="mb-5 text-[#55B467] bg-[#55B467]/10 w-14 h-14 rounded-xl flex items-center justify-center"><Columns size={28}/></div>
          <h4 className="text-xl font-bold text-white mb-3">Pilar 1 — Proceso</h4>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            Contenido que arranca con frases tipo "X pasos para..." o "usá esta estrategia". Educa al lector de que existe un sistema. Ejemplo: Mostrar un sistema estandarizado paso a paso.
          </p>
        </div>

        <div className="bg-gradient-to-b from-[#121214] to-[#121214]/50 border border-[#27272A] rounded-[1.5rem] p-8 shadow-lg relative group">
          <div className="absolute top-0 right-8 w-16 h-1 bg-[#E1306C] rounded-b-md"></div>
          <div className="mb-5 text-[#E1306C] bg-[#E1306C]/10 w-14 h-14 rounded-xl flex items-center justify-center"><Zap size={28}/></div>
          <h4 className="text-xl font-bold text-white mb-3">Pilar 2 — Dolor (Pain)</h4>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            Provoca o hace consciente al lector de un dolor. Encuentra al lector "donde está". Ejemplo: "Dejen de productizar sus servicios, hay una forma mejor".
          </p>
        </div>

        <div className="bg-gradient-to-b from-[#121214] to-[#121214]/50 border border-[#27272A] rounded-[1.5rem] p-8 shadow-lg relative group">
          <div className="absolute top-0 right-8 w-16 h-1 bg-[#3B82F6] rounded-b-md"></div>
          <div className="mb-5 text-[#3B82F6] bg-[#3B82F6]/10 w-14 h-14 rounded-xl flex items-center justify-center"><TrendingUp size={28}/></div>
          <h4 className="text-xl font-bold text-white mb-3">Pilar 3 — Tendencia (Trend)</h4>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            Conecta con ideas muy conocidas para hacerlo más grande que uno mismo. Debe ir temprano en el gancho. Ejemplo: Mencionar marcas o herramientas en tendencia.
          </p>
        </div>
      </div>
    </div>

    {/* Etapa 5 */}
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">5</div> 
        La escritura del contenido
      </h3>
      
      <p className="text-[16px] text-zinc-400 mb-8 leading-relaxed">
        Pautas estratégicas clave sobre la escritura del contenido en LinkedIn.
      </p>

      <div className="flex flex-col gap-6 mb-6">
        <div className="bg-[#1A1A1E] border border-[#27272A] rounded-[1.5rem] p-8 shadow-lg">
          <h4 className="font-semibold text-[#D5B15B] mb-4 text-xl">Orden de importancia al evaluar/arreglar un post</h4>
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#121214] border border-[#3F3F46] flex items-center justify-center text-sm font-bold text-white shrink-0">1</div>
              <span className="text-white font-medium text-lg">Idea del post</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#121214] border border-[#3F3F46] flex items-center justify-center text-sm font-bold text-white shrink-0">2</div>
              <span className="text-zinc-300 text-lg">Gancho (primeras dos o tres líneas)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#121214] border border-[#3F3F46] flex items-center justify-center text-sm font-bold text-white shrink-0">3</div>
              <span className="text-zinc-300 text-lg">Imagen / medio visual</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#121214] border border-[#3F3F46] flex items-center justify-center text-sm font-bold text-white shrink-0">4</div>
              <span className="text-zinc-300 text-lg">Formato</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#121214] border border-[#3F3F46] flex items-center justify-center text-sm font-bold text-white shrink-0">5</div>
              <span className="text-zinc-300 text-lg">CTA o pie para generar comentarios</span>
            </div>
          </div>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            Si un post no funciona, hay que arreglarlo en este orden empezando siempre desde arriba (la idea).
          </p>
        </div>

        <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.5rem] p-8 shadow-lg">
          <h4 className="font-semibold text-white mb-4 flex items-center gap-2 text-xl">
            <Layers size={22} className="text-zinc-400"/> Imitar, no copiar ni innovar de entrada
          </h4>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            Escribir inspirado en formato y ángulos de cuentas con tracción pero con palabras propias. Recién innovar tras tener resultados.
          </p>
        </div>
        
        <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.5rem] p-8 shadow-lg">
          <h4 className="font-semibold text-white mb-4 flex items-center gap-2 text-xl">
            <AlignLeft size={22} className="text-zinc-400"/> Simplicidad en el formato
          </h4>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            Empezar con posts de texto -{">"} texto + imagen -{">"} video. No complicarse con diseños elaborados al principio.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#121214] to-[#1A1A1E] border border-[#D5B15B]/30 rounded-[1.5rem] shadow-lg p-8">
        <h4 className="font-semibold text-[#D5B15B] mb-4 text-xl">Lo que "le gusta" a LinkedIn (y a la gente)</h4>
        <p className="text-[15px] text-zinc-300 leading-relaxed mb-6">Números en ganchos, Emociones fuertes, Hiring & Liderazgo, Contenido denso (tablas), Listas y viñetas, Pedir guardados/comentarios</p>
        <p className="text-[15px] text-zinc-400 leading-relaxed italic border-l-2 border-[#D5B15B]/50 pl-4">
          Aclara que el algoritmo de LinkedIn es, en definitiva, un reflejo de cómo se comporta la gente, por lo que la mayoría de estos principios de copywriting también funcionan en Instagram, Facebook, TikTok y Reels.
        </p>
      </div>
    </div>

    {/* Etapa 6 */}
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">6</div> 
        Duplicar los posts ganadores
      </h3>
      <p className="text-[16px] text-zinc-400 mb-8 leading-relaxed">
        Identificar a los ganadores orgánicos y explotarlos al máximo es clave. No insistir lo suficiente con los que funcionan es un error común.
      </p>

      <div className="flex flex-col gap-6">
        <div className="bg-[#121214] border border-[#27272A] rounded-[1.5rem] p-8 shadow-lg">
          <h4 className="font-semibold text-white mb-6 flex items-center gap-2 text-xl"><CheckCircle2 size={24} className="text-[#55B467]"/> Cómo identificar un ganador</h4>
          <ul className="space-y-5">
            <li className="flex gap-3 text-[15px] text-zinc-300">
              <div className="w-1.5 h-1.5 rounded-full bg-[#55B467] mt-2 shrink-0"/> 
              <span className="leading-relaxed">
                Verificar si un post generó leads preguntando a los clientes nuevos dónde te vieron.
              </span>
            </li>
            <li className="flex gap-3 text-[15px] text-zinc-300">
              <div className="w-1.5 h-1.5 rounded-full bg-[#55B467] mt-2 shrink-0"/> 
              <span className="leading-relaxed">
                Identificar el top 15-20%. Usar ads para los que generen leads o seguidores calificados. Descartar los de muchas impresiones sin leads.
              </span>
            </li>
          </ul>
        </div>

        <div className="bg-[#1A1A1E] border border-[#D5B15B]/20 rounded-[1.5rem] p-8 shadow-lg">
          <h4 className="font-semibold text-white mb-6 flex items-center gap-2 text-xl"><ArrowRight size={24} className="text-[#D5B15B]"/> Cómo "abusar" del ganador</h4>
          <div className="space-y-6 relative">
            <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-[#27272A]"></div>
            
            <div className="flex gap-4 relative z-10">
              <div className="w-6 h-6 rounded-full bg-[#D5B15B] text-black text-xs font-bold flex items-center justify-center shrink-0">1</div>
              <p className="text-[15px] text-zinc-300 pt-0.5 leading-relaxed">
                <strong>Repetir:</strong> Volver a subirlo con pequeños ajustes semanas después.
              </p>
            </div>
            
            <div className="flex gap-4 relative z-10">
              <div className="w-6 h-6 rounded-full bg-[#D5B15B] text-black text-xs font-bold flex items-center justify-center shrink-0">2</div>
              <p className="text-[15px] text-zinc-300 pt-0.5 leading-relaxed">
                <strong>Testear:</strong> Cambiar ganchos, probar otra imagen o CTA.
              </p>
            </div>
            
            <div className="flex gap-4 relative z-10">
              <div className="w-6 h-6 rounded-full bg-[#D5B15B] text-black text-xs font-bold flex items-center justify-center shrink-0">3</div>
              <p className="text-[15px] text-zinc-300 pt-0.5 leading-relaxed">
                <strong>Convertir a Video:</strong> Hacer un Loom profundizando para captar atención y segmentar con retargeting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const LinkedInAngulosPage = ({ setActivePageId, setSplitPageId }: { setActivePageId: (id: string) => void, setSplitPageId?: (id: string) => void }) => {
  const [isSummary, setIsSummary] = useState(false);

  return (
  <div className="max-w-4xl mx-auto w-full pb-20 animate-in fade-in duration-300">
    <div className="flex items-center justify-between mb-12">
      <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
        <ArcadiaLogo />
        <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_parent')}>Arcadia</span>
        <span className="text-zinc-700">/</span>
        <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_parent')}>Content</span>
      </div>
      
      <div className="flex items-center bg-[#1A1A1E] rounded-lg p-1 border border-zinc-800">
        <button 
          onClick={() => setIsSummary(false)}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${!isSummary ? 'bg-[#27272A] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          Completo
        </button>
        <button 
          onClick={() => setIsSummary(true)}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${isSummary ? 'bg-[#27272A] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          Resumido
        </button>
      </div>
    </div>
    
    <div className="flex items-start gap-5 mb-10">
      <div className="border border-[#D5B15B]/30 p-3.5 rounded-2xl text-[#D5B15B] bg-[#1A1A1E] mt-1 shadow-[0_0_20px_rgba(213,177,91,0.15)]">
        <Target size={28} strokeWidth={1.5} />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Ángulos de Venta</h2>
        <p className="text-[15px] text-zinc-400">Cómo hacer ángulos de venta que te hagan $400,000/mes</p>
      </div>
    </div>

    {/* Video Embed */}
    <div className="w-full aspect-video rounded-3xl overflow-hidden border border-[#27272A]/80 shadow-2xl mb-10 bg-[#121214]">
      <iframe 
        width="100%" 
        height="100%" 
        src="https://www.youtube.com/embed/zo7Xf2R4Lts" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div>

    <div className="space-y-12">
      {/* La premisa central y Creencia */}
      <div className="bg-[#121214] border border-[#27272A] rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D5B15B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="mb-8 relative z-10">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Zap size={20} className="text-[#D5B15B]"/> La premisa central y los mitos
          </h3>
          <div className="text-[15.5px] text-zinc-300 leading-relaxed mb-6">
            {isSummary 
              ? "El objetivo es invertir poco y vender mucho mediante 'Follow Me Ads'. La creencia de que necesitas gastar miles en ads para escalar es falsa; si no vendes orgánicamente, los ads no te salvarán. Con poco gasto publicitario se pueden alcanzar altos niveles de facturación."
              : (
                <div className="space-y-4">
                  <p>El creador del video (que llamaremos Rami, según se autodenomina en el contenido) arranca con un dato concreto: invierte en promedio unos $10,000 mensuales en "Follow Me Ads" (anuncios de Instagram para conseguir seguidores) y genera más de $400,000 mensuales en <strong>cash collected</strong> (plata efectivamente cobrada, no facturación). Hace énfasis en esta distinción porque, según él, la mayoría de la gente que se muestra como exitosa en Instagram habla de números de facturación, no de dinero real cobrado.</p>
                  <p>La pregunta que responde el video es: ¿cómo se invierte poco y se vende tanto, logrando un retorno de más de 40 veces lo invertido? Da varios ejemplos de clientes propios con resultados similares en proporción: Juan (gasta $5,000/mes y hace más de $100,000), Josep, nutricionista (mismo patrón), Juani ($3,000 invertidos / $60,000 generados), y Go, entrenador personal ($1,000 invertidos / $45,000 en 30 días).</p>
                  <p>Sostiene que la creencia de que escalar en Instagram requiere invertir mucha plata en publicidad es falsa. Su argumento central: si uno no vende de forma orgánica (gastando cero en anuncios), tampoco va a vender más simplemente metiéndole presupuesto a ads. Cuenta que él mismo creía que necesitaba invertir mínimo $100,000 mensuales en anuncios para llegar a donde está hoy, porque era lo que veía hacer a sus competidores y referentes del rubro. Pero el embudo que terminó descubriendo le demostró lo contrario, y afirma que cualquier persona que busque escalar a $30,000, $50,000, $70,000 o $100,000 mensuales necesita poco o cero gasto publicitario para lograrlo. Da más ejemplos de clientes: Fia ($80,000/mes, gasto cero en ads), Hero ($45,000/mes), Joseph ($100,000+ con $5,000 en ads), Juan Pereira (su agencia de marketing hace $100,000+ con $5,000 en gasto publicitario).</p>
                </div>
              )}
          </div>
          <div className={`grid ${isSummary ? 'grid-cols-2 gap-4' : 'grid-cols-2 md:grid-cols-4 gap-4'} mb-2`}>
             <div className="bg-[#1A1A1E] border border-[#27272A] rounded-xl p-4 text-center">
                <div className="text-xs text-zinc-500 mb-1">Inversión Ads</div>
                <div className="text-lg font-bold text-white">$10k/mes</div>
             </div>
             <div className="bg-[#1A1A1E] border border-[#D5B15B]/20 rounded-xl p-4 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#D5B15B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-xs text-[#D5B15B] mb-1 relative z-10">Cash Collected</div>
                <div className="text-lg font-bold text-[#D5B15B] relative z-10">$400k/mes</div>
             </div>
          </div>
        </div>
      </div>

      {/* Los dos conceptos fundamentales */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-6">Los 2 conceptos fundamentales</h3>
        <div className="text-[16px] text-zinc-400 mb-8 leading-relaxed">
          {isSummary 
            ? "Todo se reduce a: 1. Saber hacer buen contenido. 2. Potenciar ese contenido con anuncios. No se trata de volumen, sino de impacto."
            : (
                <div className="space-y-4">
                  <p>Según el autor, todo se reduce a dos cosas: primero, saber hacer buen contenido; segundo, potenciar ese buen contenido con anuncios para que llegue a más gente. Asegura que entender en profundidad estos dos conceptos fue lo que le permitió pasar de facturar entre $100,000 y $150,000 mensuales a comienzos de 2025, a sostener $400,000 mensuales a comienzos de 2026 (un 4x).</p>
                  <p>Aclara que esto no es una cuestión de volumen de contenido. Él hoy sube seis piezas diarias porque su objetivo es escalar a un millón mensual, pero su primer mes de $400,000 lo logró subiendo solo tres piezas por día. Recomienda como mínimo entre 5 y 14 piezas de contenido por semana, y dice que cualquier cantidad entre 5 y 21 piezas semanales alcanza para escalar. El punto que remarca es que si el contenido no genera el impacto necesario para activar un "gatillo mental" que empuje a la audiencia a comprar, publicar más de ese mismo contenido problemático no soluciona nada; hay que arreglar el contenido en sí, no la cantidad.</p>
                </div>
            )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Parte 1: Formatos */}
          <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.5rem] p-7 shadow-lg">
             <h4 className="font-semibold text-white mb-5 flex items-center gap-2 text-lg">
               <Layers size={20} className="text-[#55B467]"/> Parte 1: Formatos Ganadores
             </h4>
             <p className="text-[14.5px] text-zinc-300 leading-relaxed mb-6">
               {isSummary 
                 ? "Una vez que encuentras formatos ganadores, no se queman. Repítelos sin improvisar."
                 : "Muestra ejemplos de clientes con formatos de contenido muy marcados y repetidos: Josep (nutricionista) usa video profesional hablando a cámara, carrusel con IA, TikTok de pregunta y respuesta; Juan Suárez (infoproducto de finanzas) usa el formato de \"hablar con uno mismo\", pregunta y respuesta tipo TikTok, carrusel con IA; Juan Pereira usa carrusel con IA, carrusel de noticias, TikTok de preguntas y respuestas, video profesional. La característica común entre todos es que repiten siempre los mismos formatos sin improvisar. La idea clave que plantea es que, una vez que se encuentran formatos ganadores, casi nunca se \"queman\" (dejan de funcionar). Lo que sí se quema, según él, son las ideas de contenido si se vuelven muy repetitivas."}
             </p>
             <ul className="space-y-4">
               <li className="flex gap-3 text-[14.5px] text-zinc-400 leading-relaxed">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#55B467] mt-2 shrink-0"/> 
                 <span>{isSummary ? "Buscar inspiración fuera del propio nicho/idioma." : "Buscar inspiración en creadores que no hablen el mismo idioma que uno usa para vender (es decir, evitar copiar a competidores directos o referentes del propio nicho). Crear una cuenta fantasma de Instagram y dedicarle 30 minutos a curar el algoritmo para sacar formatos y ángulos."}</span>
               </li>
               <li className="flex gap-3 text-[14.5px] text-zinc-400 leading-relaxed">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#55B467] mt-2 shrink-0"/> 
                 <span>{isSummary ? "Elegir de 3 a 5 formatos y ser constante." : "Mantenerlo simple: elegir entre 3 y 5 formatos para empezar. No se trata de tener más formatos sino de mantener consistencia subiendo todos los días con los formatos y ángulos correctos."}</span>
               </li>
               <li className="flex gap-3 text-[14.5px] text-zinc-400 leading-relaxed">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#55B467] mt-2 shrink-0"/> 
                 <span>{isSummary ? "Período de prueba de 30-60 días." : "Sugiere un período exploratorio de 30 a 60 días probando no más de 5 formatos en simultáneo, descartando los que no funcionan, probando nuevos, y quedándose con una selección final de 5 o 6 formatos como máximo."}</span>
               </li>
             </ul>
          </div>

          {/* Parte 2: Ángulos */}
          <div className="bg-gradient-to-br from-[#121214] to-[#1A1A1E] border border-[#D5B15B]/30 rounded-[1.5rem] p-7 shadow-lg">
             <h4 className="font-semibold text-[#D5B15B] mb-5 flex items-center gap-2 text-lg">
               <Target size={20} className="text-[#D5B15B]"/> Parte 2: Ángulos de Comunicación
             </h4>
             <div className="text-[14.5px] text-zinc-300 leading-relaxed mb-6">
               {isSummary 
                 ? "Un ángulo es un tema que te trae clientes. Repetir ángulos ganadores es clave; la audiencia necesita escuchar el mismo mensaje varias veces."
                 : (
                    <div className="space-y-4">
                      <p>Define un ángulo de comunicación, en términos simples, como un tema que uno sabe que le trae clientes. Cuenta que su propio contenido es "monótono" a propósito: siempre habla de los mismos temas (embudos de lanzamiento, ManyChat, depender de referidos, gestión de setters, venta orgánica con reels y carruseles) y nunca se sale de esos ángulos ganadores.</p>
                      <p>Explica que la mayoría de la gente improvisa el contenido, hablando de lo que se les ocurre en el momento, sin diferenciar entre lo que uno quiere decir y lo que la audiencia quiere escuchar. Cuenta su propio caso: hace un año y medio hablaba de muchos temas dispersos (backend, LTV, apps, ofertas, operaciones), y al estudiar sus cierres de ventas descubrió que la gente le compraba por temas muy específicos. Cuando dejó de hablar de mil cosas y empezó a repetir constantemente los mismos ángulos, su negocio pasó de $100,000-150,000 a $400,000-450,000 mensuales (cuadruplicó el negocio) solo por cambiar de qué hablaba en el contenido, sin aumentar la cantidad de leads ni de contenido publicado.</p>
                      <p>La explicación psicológica que da: la gente no necesita que uno hable de cosas distintas constantemente, necesita que le recuerden repetidamente por qué está haciendo las cosas mal. Nadie compra porque le dijeron una vez que algo estaba mal; compran porque escucharon el mismo mensaje 40 veces y a la vez 41 deciden actuar.</p>
                    </div>
                 )}
             </div>
             <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-[#1A1A1E] border border-[#3F3F46] rounded-xl">
                   <span className="text-sm font-medium text-white">Problema</span>
                   <span className="text-xs text-zinc-400 bg-[#27272A] px-2 py-1 rounded-md">~50%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#1A1A1E] border border-[#3F3F46] rounded-xl">
                   <span className="text-sm font-medium text-white">Solución</span>
                   <span className="text-xs text-zinc-400 bg-[#27272A] px-2 py-1 rounded-md">~15%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#1A1A1E] border border-[#3F3F46] rounded-xl">
                   <span className="text-sm font-medium text-white">Producto</span>
                   <span className="text-xs text-zinc-400 bg-[#27272A] px-2 py-1 rounded-md">~20%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#1A1A1E] border border-[#3F3F46] rounded-xl">
                   <span className="text-sm font-medium text-white">Mentalidad</span>
                   <span className="text-xs text-zinc-400 bg-[#27272A] px-2 py-1 rounded-md">~15%</span>
                </div>
             </div>
          </div>
        </div>

        {/* Tipos de Angulos detallados */}
        {!isSummary && (
          <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-7 mb-12 shadow-sm">
             <h4 className="font-semibold text-white mb-6 flex items-center gap-2"><FileText size={18} className="text-zinc-400"/> Detalle de los Ángulos</h4>
             <div className="space-y-6">
                <div className="border-l-2 border-[#D5B15B] pl-4">
                   <h5 className="font-medium text-white text-[15px] mb-1">1. Ángulo de Problema (~50% de la estrategia)</h5>
                   <p className="text-sm text-zinc-400 leading-relaxed mb-2">Es donde se "mete el dedo en la llaga" sobre los dolores y problemas de la audiencia. La clave es que este tipo de contenido no busca resolver el problema, sino explicar <strong>por qué</strong> la persona tiene ese problema. Cuando alguien percibe que uno entiende su problema mejor de lo que ellos mismos lo entienden, ahí empiezan a percibir a uno como autoridad, y esa autoridad se traduce en ventas. Ejemplo propio: hablar de por qué el "BCL Funnel" (embudo de lanzamiento) es malo le trae clientes que dependen de anuncios y están hartos de gastar fortunas en publicidad.</p>
                   <p className="text-sm text-zinc-400 leading-relaxed">Para definir los ángulos de problema, recomienda usar una especie de campana de Gauss mental con tres zonas: leads descalificados (izquierda), clientes promedio (centro) y clientes perfectos (derecha). El ejercicio consiste en pensarle nombre y apellido al cliente ideal real (de la propia base de clientes), y listar entre 7 y 10 problemas/dolores que esa persona tenía antes de comprar. Aclara que en el 80% de los casos esa comunicación no va a atraer exactamente al cliente perfecto, pero sí va a atraer un 80% de clientes promedio (que también sirven) y un 20% de clientes perfectos.</p>
                </div>
                <div className="border-l-2 border-[#55B467] pl-4">
                   <h5 className="font-medium text-white text-[15px] mb-1">2. Ángulo de Solución (~15% de la estrategia)</h5>
                   <p className="text-sm text-zinc-400 leading-relaxed">Es simplemente mostrar cómo se resuelven los problemas planteados en los ángulos de problema. Se construye tomando cada ángulo de problema y planteando soluciones para él. A diferencia de los ángulos de problema (de los que recomienda definir entre 7 y 10), los ángulos de solución pueden ser infinitos, porque un mismo problema se puede presentar de mil maneras distintas (da varios ejemplos con ManyChat: flujos para hacer $100K con la mentoría, automatizar conversaciones, reemplazar setters, conectar ManyChat con Claude). Remarca que los ángulos de problema son los más importantes porque son los que atraen seguidores nuevos de calidad; los de solución sirven para diversificar pero siempre deben estar atados a un problema ya definido.</p>
                </div>
                <div className="border-l-2 border-[#3F3F46] pl-4">
                   <h5 className="font-medium text-white text-[15px] mb-1">3. Ángulo de Producto (~20% de la estrategia)</h5>
                   <p className="text-sm text-zinc-400 leading-relaxed">Es mostrar transformaciones de clientes: carruseles, videos de casos de éxito, entrevistas con clientes. Lo describe como una parte fundamental de la estrategia, porque sin mostrar resultados reales la audiencia confía mucho menos y las ventas bajan considerablemente.</p>
                </div>
                <div className="border-l-2 border-[#3F3F46] pl-4">
                   <h5 className="font-medium text-white text-[15px] mb-1">4. Ángulo de Mentalidad (~15% de la estrategia)</h5>
                   <p className="text-sm text-zinc-400 leading-relaxed">Su objetivo es rebatir objeciones comunes que aparecen en los chats y llamadas de venta. Aclara que esto no tiene que ver con desarrollo personal genérico (motivacional típico tipo "levantate a las 5am"), sino con tomar objeciones reales y específicas y responderlas directamente en el contenido. También sirve para generar urgencia, metiendo algo de miedo cuando es pertinente. Da el ejemplo de un cliente (Tomás, consultoría fiscal) cuyo ángulo de mentalidad advierte sobre las consecuencias de no tener la estructura fiscal en regla con el IRS. Otro ejemplo: él mismo hace contenido respondiendo directamente a la objeción de "ya pagué otras mentorías antes y no funcionaron".</p>
                </div>
             </div>
          </div>
        )}
      </div>

      {/* Trazabilidad */}
      <div className="border-t border-[#27272A] pt-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
             <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Database size={20} className="text-zinc-400"/> Trazabilidad Inversa</h3>
             <div className="text-[15.5px] text-zinc-300 leading-relaxed mb-6">
               {isSummary 
                 ? "Si ya tienes ventas, analiza los últimos 90 días: cruza los cierres de venta con las piezas de contenido con las que interactuaron antes de la llamada. Los datos reales revelarán tus verdaderos ángulos ganadores."
                 : (
                    <div className="space-y-4">
                      <p>Aclara que el método anterior (listar 7-10 problemas del cliente ideal) sirve solo para quienes recién están empezando y no tienen data previa. Si ya se viene generando contenido y ventas, el ejercicio correcto se llama <strong>trazabilidad inversa</strong>:</p>
                      <ol className="list-decimal pl-5 space-y-2 text-sm text-zinc-400">
                        <li>Revisar los últimos 90 días del negocio y anotar todas las llamadas calificadas y todos los cierres de venta de ese período (usa un sistema de "lead scoring" con categorías A, B, C y D).</li>
                        <li>Revisar los chats y llamadas de esas personas. En su caso, usan ManyChat para etiquetar automáticamente a cada cliente según las piezas de contenido con las que interactuó, lo cual facilita mucho el proceso. Sin ese sistema de etiquetas, hay que revisar manualmente todas las conversaciones de Instagram o ManyChat, y bajar y analizar (incluso con IA) las transcripciones de las llamadas.</li>
                        <li>Pasar toda esa información por inteligencia artificial para que identifique los ángulos más recurrentes entre los leads calificados y los clientes que efectivamente compraron, dándole más peso a quienes compraron por sobre quienes solo se agendaron.</li>
                        <li>Aclara un matiz importante: lo que se discute en la llamada de venta no siempre es lo mismo que lo que la persona interactuó en el contenido. Lo más útil para definir ángulos ganadores es justamente fijarse con qué contenido interactuó la persona <em>antes</em> de llegar a la llamada, porque eso fue lo que realmente la atrajo.</li>
                      </ol>
                      <p>El hallazgo curioso que menciona es que casi siempre el ejercicio revela sorpresas: temas que el dueño del negocio pensaba que eran irrelevantes terminan siendo los que más clientes traen, y viceversa, temas que parecían ser los ángulos ganadores reales resultan ser indiferentes para la audiencia. Insiste en que esto pasa "siempre" y que es algo que no se puede intuir, solo se descubre haciendo el estudio real de los datos.</p>
                    </div>
                 )}
             </div>
             <div className="bg-[#1A1A1E] border border-[#3F3F46] p-4 rounded-xl">
                <p className="text-sm text-zinc-400 italic">"Los temas que pensabas irrelevantes a veces son los que más clientes traen, y viceversa. Solo se descubre con los datos."</p>
             </div>
          </div>
          <div className="w-full md:w-[350px] bg-gradient-to-b from-[#1A1A1E] to-[#121214] border border-[#3F3F46] rounded-[1.5rem] p-6 shadow-lg">
             <h4 className="font-semibold text-white mb-4 text-sm flex items-center gap-2"><Megaphone size={16} className="text-[#D5B15B]"/> Ads & Costos por Lead</h4>
             <p className="text-[13px] text-zinc-400 mb-4 leading-relaxed">Una vez definidos los formatos y ángulos ganadores, toma las piezas del <strong>ángulo de problema</strong> y córreles anuncios (Follow Me Ads).</p>
             <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                   <span className="text-zinc-300">AOV Bajo ($500-$1k)</span>
                   <span className="text-white font-medium">$0.30 - $1.00 / seguidor</span>
                </div>
                <div className="w-full h-px bg-[#27272A]"></div>
                <div className="flex justify-between items-center text-xs">
                   <span className="text-zinc-300">AOV Medio ($2k-$5k)</span>
                   <span className="text-white font-medium">$1.00+ / seguidor</span>
                </div>
                <div className="w-full h-px bg-[#27272A]"></div>
                <div className="flex justify-between items-center text-xs">
                   <span className="text-zinc-300">AOV Alto ($3k-$5k+)</span>
                   <span className="text-white font-medium">$2.00 - $4.00 / seguidor</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

const LinkedInContentPage = ({ setActivePageId, setSplitPageId }: { setActivePageId: (id: string) => void, setSplitPageId?: (id: string) => void }) => {
  const [isSummary, setIsSummary] = useState(false);

  return (
  <div className="max-w-4xl mx-auto w-full pb-20 animate-in fade-in duration-300">
    <div className="flex items-center justify-between mb-12">
      <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
        <ArcadiaLogo />
        <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_parent')}>Arcadia</span>
        <span className="text-zinc-700">/</span>
        <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_parent')}>Content</span>
      </div>
      
      <div className="flex items-center bg-[#1A1A1E] rounded-lg p-1 border border-zinc-800">
        <button 
          onClick={() => setIsSummary(false)}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${!isSummary ? 'bg-[#27272A] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          Completo
        </button>
        <button 
          onClick={() => setIsSummary(true)}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${isSummary ? 'bg-[#27272A] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          Resumido
        </button>
      </div>
    </div>
    
    <div className="animate-in fade-in duration-300">
      <div className="flex items-start gap-5 mb-10">
          <div className="border border-zinc-700/50 p-3.5 rounded-2xl text-zinc-300 bg-[#1A1A1E] mt-1 shadow-xl">
            <PenTool size={28} strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">La parte de creación de contenido en LinkedIn</h2>
            <p className="text-zinc-400 text-[16px] leading-relaxed">Dentro del "embudo híbrido orgánico a pago" que presentan Ammon y Paulo (cofundadores de The Media Engine), hay una etapa específica dedicada pura y exclusivamente a la generación y escritura de contenido para LinkedIn. Esta es la parte central del proceso, ya que sin buenas ideas y buena ejecución, ni el contenido orgánico ni los anuncios posteriores van a funcionar.</p>
          </div>
        </div>

        {/* Etapa 3 */}
        <div className="mb-16">
      <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">3</div> 
        La ideación de contenido (minería de fuentes)
      </h3>
      <p className="text-[16px] text-zinc-400 mb-8 leading-relaxed">
        {isSummary 
          ? "El autor explica que la idea de un posteo es lo que determina si el contenido funciona o no, así que como agencia tuvieron que sistematizar una forma de generar ideas únicas e interesantes de manera constante." 
          : "El autor explica que la idea de un posteo es lo que determina si el contenido funciona o no, así que como agencia tuvieron que sistematizar una forma de generar ideas únicas e interesantes de manera constante, sin importar el nicho del cliente. Para esto \"minan\" varias fuentes:"}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><Phone size={18}/></div>
            <h4 className="font-semibold text-white text-lg">{isSummary ? "1. Llamadas de venta" : "1. Transcripciones de llamadas de venta"}</h4>
          </div>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            {isSummary 
              ? "Analizan con IA cada llamada, buscando el \"light bulb moment\": cuando el prospecto cambia de perspectiva tras algo que dice el vendedor."
              : "Analizan con IA cada llamada de un lead calificado, buscando específicamente el \"light bulb moment\" (momento de lamparita): el punto en que el prospecto creía algo, el vendedor le dice algo, y el prospecto pasa a creer algo distinto, dándose cuenta de una mejor forma de ver su situación. Llevar estos momentos desde la venta hacia el contenido de marketing permite atraer leads más educados y calificados. También recomienda prestar atención a las palabras y frases exactas que usa el prospecto, porque ese vocabulario es oro para escribir los posts después."}
          </p>
        </div>
        
        <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><Bot size={18}/></div>
            <h4 className="font-semibold text-white text-lg">{isSummary ? "2. Prompting sobre dolores" : "2. Prompting adicional sobre dolores y problemas"}</h4>
          </div>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            {isSummary 
              ? "La IA identifica puntos de dolor, causas, tendencias e identifica el vocabulario del ICP (ej: \"founder\", \"CEO\")."
              : "Además del \"light bulb moment\", hacen que la IA identifique puntos de dolor (síntomas presentes) y problemas (causas), detecte ideas en tendencia dentro de la industria (mencionan usar Grok para esto), e identifique el vocabulario específico que usa el ICP (Ideal Customer Profile) para describirse a sí mismo —por ejemplo, si se llaman \"founder\", \"CEO\", \"exec\" o \"leader\"— porque conocer las palabras exactas que usa el cliente ideal te da una ventaja enorme a la hora de escribir."}
          </p>
        </div>
        
        <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><FileSearch size={18}/></div>
            <h4 className="font-semibold text-white text-lg">{isSummary ? "3. Procesos internos" : "3. Procesos y documentación interna"}</h4>
          </div>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            {isSummary 
              ? "Revisar metodologías. Los frameworks para educar al equipo interno suelen funcionar como contenido educativo público."
              : "Sugiere revisar la propia metodología, procesos y estrategias internas de la empresa, ya que los frameworks que se usan para educar al equipo interno suelen funcionar también como contenido educativo público. De hecho, aclara que el documento completo de este playbook nació como un documento interno para entrenar a su equipo y a sus clientes de consultoría, y luego lo adaptaron para hacerlo público."}
          </p>
        </div>
        
        <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><Target size={18}/></div>
            <h4 className="font-semibold text-white text-lg">{isSummary ? "4. Posts de la competencia" : "4. Posteos de la competencia (imitación, no copia)"}</h4>
          </div>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            {isSummary 
              ? "Armar lista de competidores buscando \"ideas resonantes\". Armar feed curado para ver posteos recientes."
              : "Recomienda armar una lista de competidores en LinkedIn, Twitter y YouTube, buscando específicamente \"ideas resonantes\": posts que repiten una y otra vez porque les funcionan. Sugiere armar un feed curado para ver solo los posteos recientes de esas cuentas elegidas (explica un truco usando la barra de búsqueda de LinkedIn: buscar, filtrar por \"posts\" de las últimas 24 horas, y elegir manualmente los miembros que querés seguir de cerca)."}
          </p>
        </div>
        
        <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><TrendingUp size={18}/></div>
            <h4 className="font-semibold text-white text-lg">{isSummary ? "5. Ideas en tendencia" : "5. Ideas en tendencia (\"trending\")"}</h4>
          </div>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            {isSummary 
              ? "Combinar tendencias del momento en un mismo gancho para viralizarse fuerte (ej: GPT-5 reemplazando ghostwriters)."
              : "Pone el ejemplo de un post de Paulo que combinó dos tendencias del momento (que PayPal pagó un sueldo altísimo a un ghostwriter interno, y el lanzamiento de GPT-5 que supuestamente \"reemplazaría\" a los redactores) en un mismo gancho, logrando viralizarse fuerte."}
          </p>
        </div>

        <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><Copy size={18}/></div>
            <h4 className="font-semibold text-white text-lg">6. Brandjacking</h4>
          </div>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            {isSummary 
              ? "Aprovechar marcas conocidas y populares para anclar el contenido propio y conectar con audiencias más grandes."
              : "Aprovechar marcas conocidas y populares para anclar el contenido propio. Da el ejemplo de un post sobre la empresa Clay que se volvió muy viral."}
          </p>
        </div>

        <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><Compass size={18}/></div>
            <h4 className="font-semibold text-white text-lg">7. Medios de la industria</h4>
          </div>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            {isSummary 
              ? "Identificar fuentes de contenido que consume el cliente, resumirlas con IA y rescatar ideas (ej: resumir un podcast dando crédito)."
              : "Identificar todas las fuentes de contenido que consume el cliente objetivo (podcasts, artículos, etc.), resumirlas con IA y rescatar las mejores ideas. Da el ejemplo de un cliente cuyo post más viral fue básicamente un resumen curado de un episodio de podcast, sin necesidad de mucho trabajo propio, simplemente dando crédito a la fuente original."}
          </p>
        </div>

        <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.25rem] p-6 shadow-md hover:border-[#3F3F46] transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#1A1A1E] rounded-lg border border-zinc-800 text-[#D5B15B]"><Mic size={18}/></div>
            <h4 className="font-semibold text-white text-lg">{isSummary ? "8. Entrevistas internas" : "8. Entrevistas internas con el \"thought leader\""}</h4>
          </div>
          <p className="text-[15px] text-zinc-400 leading-relaxed">
            {isSummary 
              ? "Entrevistar al \"thought leader\" sobre las ideas ganadoras. Usar preguntas guiadas hacia ideas que van a funcionar."
              : "Tomar todas las ideas recolectadas y entrevistar a la persona (el fundador, el cliente, etc.) con preguntas abiertas para extraer su opinión, su experiencia personal y su punto de vista único sobre esas ideas ya identificadas como ganadoras. En vez de preguntas genéricas tipo \"¿qué pasó la semana pasada?\", se guía al entrevistado directamente hacia ideas que ya saben que van a funcionar. Algunas preguntas ejemplo que usan: qué dato interesante surgió de una conversación con un cliente, qué malentendidos comunes tienen los clientes, qué éxitos vieron esa semana, qué los frustró la última semana, o qué consejo común vieron fallar recientemente (siempre con foco en lo reciente, porque eso es lo que mejor funciona en LinkedIn)."}
          </p>
        </div>
      </div>
    </div>

    {/* Etapa 4 */}
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">4</div> 
        Los tres pilares de contenido
      </h3>
      <p className="text-[16px] text-zinc-400 mb-8 leading-relaxed">
        {isSummary 
          ? "Hay que pensar exactamente qué necesita ver el cliente ideal para creer que uno tiene la ventaja y descubrir que existes."
          : "El autor insiste en que publicar \"lo que sea\" es una receta para el desastre. Hay que pensar exactamente qué necesita ver el cliente ideal para creer que uno tiene el \"edge\" (la ventaja diferencial mencionada antes en el video), entender que uno cumple lo que promete, y descubrir que uno existe. Define tres pilares de contenido, lo suficientemente genéricos como para aplicarse a cualquier cuenta:"}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-b from-[#121214] to-[#121214]/50 border border-[#27272A] flex flex-col rounded-[1.5rem] p-7 shadow-lg relative group">
          <div className="absolute top-0 right-8 w-16 h-1 bg-[#55B467] rounded-b-md"></div>
          <div className="mb-5 text-[#55B467] bg-[#55B467]/10 w-12 h-12 rounded-xl flex items-center justify-center"><Columns size={24}/></div>
          <h4 className="text-xl font-bold text-white mb-3">{isSummary ? "Pilar 1 — Proceso" : "Pilar 1: Proceso"}</h4>
          <p className="text-zinc-400 flex-1 leading-relaxed text-[14.5px] mb-6">
            {isSummary 
              ? "Contenido que arranca con frases tipo \"X pasos para...\" o \"usá esta estrategia\". Educa al lector de que existe un sistema. Ejemplo: Mostrar un sistema estandarizado paso a paso."
              : "Contenido que arranca con frases tipo \"X pasos para lograr [resultado]\" o \"este es el framework\" o \"usá esta estrategia para lograr [resultado]\". Su propósito es educar al lector de que existe un sistema o proceso para resolver su problema, y que uno lo tiene. Funciona mejor cuanto más único e interesante es el proceso mostrado; si es algo genérico y obvio, no va a rendir bien."}
          </p>
          {!isSummary && (
            <div className="text-[13px] bg-[#1A1A1E] border border-[#27272A] p-4 rounded-xl text-zinc-300">
              <strong>Ejemplo:</strong> El propio video que están viendo es, según el autor, un ejemplo de post/pilar de proceso, mostrando un sistema estandarizado paso a paso.
            </div>
          )}
        </div>

        <div className="bg-gradient-to-b from-[#121214] to-[#121214]/50 border border-[#27272A] flex flex-col rounded-[1.5rem] p-7 shadow-lg relative group">
          <div className="absolute top-0 right-8 w-16 h-1 bg-[#E1306C] rounded-b-md"></div>
          <div className="mb-5 text-[#E1306C] bg-[#E1306C]/10 w-12 h-12 rounded-xl flex items-center justify-center"><Zap size={24}/></div>
          <h4 className="text-xl font-bold text-white mb-3">{isSummary ? "Pilar 2 — Dolor (Pain)" : "Pilar 2: Dolor"}</h4>
          <p className="text-zinc-400 flex-1 leading-relaxed text-[14.5px] mb-6">
            {isSummary 
              ? "Provoca o hace consciente al lector de un dolor. Encuentra al lector \"donde está\". Ejemplo: \"Dejen de productizar sus servicios, hay una forma mejor\"."
              : "Contenido diseñado específicamente para provocar, agitar o hacer consciente al lector de un dolor que tiene, o de por qué lo tiene. Es contenido que \"encuentra al lector donde está\": qué está pensando, qué está sintiendo en ese momento."}
          </p>
          {!isSummary && (
            <div className="text-[13px] bg-[#1A1A1E] border border-[#27272A] p-4 rounded-xl text-zinc-300">
              <strong>Ejemplos:</strong> "la semana pasada pasó tal cosa que explica el problema" o "¿se acuerdan cómo era [tal proceso] antes?" (funciona con audiencias mayores que necesitan modernizarse). "Agencias, dejen de productizar sus servicios, es la forma más rápida de devaluar su experiencia y competir por precio, hay una forma mejor" (girando el cuchillo).
            </div>
          )}
        </div>

        <div className="bg-gradient-to-b from-[#121214] to-[#121214]/50 border border-[#27272A] flex flex-col rounded-[1.5rem] p-7 shadow-lg relative group">
          <div className="absolute top-0 right-8 w-16 h-1 bg-[#3B82F6] rounded-b-md"></div>
          <div className="mb-5 text-[#3B82F6] bg-[#3B82F6]/10 w-12 h-12 rounded-xl flex items-center justify-center"><TrendingUp size={24}/></div>
          <h4 className="text-xl font-bold text-white mb-3">{isSummary ? "Pilar 3 — Tendencia (Trend)" : "Pilar 3: Tendencia"}</h4>
          <p className="text-zinc-400 flex-1 leading-relaxed text-[14.5px] mb-6">
            {isSummary 
              ? "Conecta con ideas muy conocidas para hacerlo más grande que uno mismo. Debe ir temprano en el gancho. Ejemplo: Mencionar marcas o herramientas en tendencia."
              : "Contenido que conecta con ideas o marcas muy conocidas para hacerlo más grande que uno mismo. La clave es mencionar la tendencia bien temprano en el gancho (las primeras líneas) y, si es posible, reflejarla también en la imagen, para que más gente conecte y se enganche con el post."}
          </p>
          {!isSummary && (
            <div className="text-[13px] bg-[#1A1A1E] border border-[#27272A] p-4 rounded-xl text-zinc-300">
              <strong>Ejemplo:</strong> Mencionar IA genera impresiones automáticamente, o aprovechar un lanzamiento (Comet de Perplexity). O decir "Six Sense acaba de matar el dato de intención, se terminó" con captura de pantalla de esa marca.
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Etapa 5 */}
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">5</div> 
        La escritura del contenido
      </h3>
      
      <p className="text-[16px] text-zinc-400 mb-8 leading-relaxed">
        {isSummary 
          ? "Pautas estratégicas clave sobre la escritura del contenido en LinkedIn."
          : "El autor aclara que no va a entrar en el detalle completo del copywriting de LinkedIn (dice que necesitaría 30 páginas más para eso), pero da pautas estratégicas clave:"}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-[#1A1A1E] border border-[#27272A] rounded-[1.5rem] p-7 shadow-lg">
          <h4 className="font-semibold text-[#D5B15B] mb-5 text-lg">
            {isSummary ? "Orden de importancia al evaluar/arreglar un post" : "Orden al evaluar/arreglar un post"}
          </h4>
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#121214] border border-[#3F3F46] flex items-center justify-center text-sm font-bold text-white shrink-0">1</div>
              <span className="text-white font-medium text-md">Idea del post</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#121214] border border-[#3F3F46] flex items-center justify-center text-sm font-bold text-white shrink-0">2</div>
              <span className="text-zinc-300 text-md">Gancho (primeras dos o tres líneas)</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#121214] border border-[#3F3F46] flex items-center justify-center text-sm font-bold text-white shrink-0">3</div>
              <span className="text-zinc-300 text-md">Imagen / medio visual</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#121214] border border-[#3F3F46] flex items-center justify-center text-sm font-bold text-white shrink-0">4</div>
              <span className="text-zinc-300 text-md">Formato</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#121214] border border-[#3F3F46] flex items-center justify-center text-sm font-bold text-white shrink-0">5</div>
              <span className="text-zinc-300 text-md">CTA o pie para generar comentarios</span>
            </div>
          </div>
          <p className="text-zinc-400 leading-relaxed text-[14px]">
            {isSummary 
              ? "Si un post no funciona, hay que arreglarlo en este orden empezando siempre desde arriba (la idea)."
              : "Insiste en que si un post no funciona, hay que arreglarlo en ese orden empezando siempre desde arriba (la idea), nunca desde abajo. Explica que vio posts con ideas geniales pero gancho, imagen, formato y CTA terribles funcionar mejor que posts con todo eso perfecto pero con una idea mala de base."}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.5rem] shadow-lg flex-1 p-7">
            <h4 className="font-semibold text-white mb-3 flex items-center gap-2 text-lg">
              <Layers size={20} className="text-zinc-400"/> Imitar, no copiar ni innovar de entrada
            </h4>
            <p className="text-zinc-400 leading-relaxed text-[14px]">
              {isSummary 
                ? "Escribir inspirado en formato y ángulos de cuentas con tracción pero con palabras propias. Recién innovar tras tener resultados."
                : "Recomienda mirar en profundidad a cuentas que ya tienen tracción en el nicho propio: cómo formatean, cómo nombran a la audiencia objetivo, qué ángulos usan, qué posts repiten. Después, escribir el propio post inspirado en eso pero con palabras propias, sin copiar literalmente el sistema, framework o gancho ajeno (dice que mucha gente copió su contenido de forma literal y que eso \"no sirve para nada\", porque solo está empujando el mensaje de otro en vez del propio). Recién después de tener resultados con esta imitación es momento de empezar a innovar: probar nuevos ángulos sobre el mismo formato, o el mismo ángulo con un nuevo formato, para entender qué variables (idea, gancho, imagen, formato, CTA) realmente funcionan."}
            </p>
          </div>
          
          <div className="bg-[#121214] border border-[#27272A]/80 rounded-[1.5rem] shadow-lg flex-1 p-7">
            <h4 className="font-semibold text-white mb-3 flex items-center gap-2 text-lg">
              <AlignLeft size={20} className="text-zinc-400"/> Simplicidad en el formato
            </h4>
            <p className="text-zinc-400 leading-relaxed text-[14px]">
              {isSummary 
                ? "Empezar con posts de texto -> texto + imagen -> video. No complicarse con diseños elaborados al principio."
                : "No hay que complicarse con diseños gráficos elaborados desde el principio. Sugiere empezar con posts de solo texto, una vez que eso funcione bien agregar imagen, y recién cuando texto + imagen funcionan bien, convertir eso en video. Aclara que él personalmente nunca hizo infografías al principio y aun así le funcionó muy bien en términos de impresiones e ingresos; solo más adelante empezó a usar gráficos de proceso más elaborados, que ayudan pero no son un requisito para lograr resultados."}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#121214] to-[#1A1A1E] border border-[#D5B15B]/30 rounded-[1.5rem] shadow-lg p-7">
        <h4 className="font-semibold text-[#D5B15B] mb-4 text-lg">Lo que "le gusta" a LinkedIn (y a la gente)</h4>
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="px-3 py-1.5 bg-[#27272A] border border-[#3F3F46] rounded-lg text-sm text-zinc-300">Números en ganchos</span>
          <span className="px-3 py-1.5 bg-[#27272A] border border-[#3F3F46] rounded-lg text-sm text-zinc-300">Emociones fuertes</span>
          <span className="px-3 py-1.5 bg-[#27272A] border border-[#3F3F46] rounded-lg text-sm text-zinc-300">Hiring & Liderazgo</span>
          <span className="px-3 py-1.5 bg-[#27272A] border border-[#3F3F46] rounded-lg text-sm text-zinc-300">Contenido denso (tablas)</span>
          <span className="px-3 py-1.5 bg-[#27272A] border border-[#3F3F46] rounded-lg text-sm text-zinc-300">Listas y viñetas</span>
          <span className="px-3 py-1.5 bg-[#27272A] border border-[#3F3F46] rounded-lg text-sm text-zinc-300">Pedir guardados/comentarios</span>
          {!isSummary && (
            <>
              <span className="px-3 py-1.5 bg-[#27272A] border border-[#3F3F46] rounded-lg text-sm text-zinc-300">Formato cuidado</span>
              <span className="px-3 py-1.5 bg-[#27272A] border border-[#3F3F46] rounded-lg text-sm text-zinc-300">Imágenes con caras</span>
              <span className="px-3 py-1.5 bg-[#27272A] border border-[#3F3F46] rounded-lg text-sm text-zinc-300">Lead magnets y engagement bait</span>
            </>
          )}
        </div>
        <p className="text-zinc-400 leading-relaxed italic border-l-2 border-[#D5B15B]/50 pl-4 text-[14.5px]">
          Aclara que el algoritmo de LinkedIn es, en definitiva, un reflejo de cómo se comporta la gente, por lo que la mayoría de estos principios de copywriting también funcionan en Instagram, Facebook, TikTok y Reels.
        </p>
      </div>
    </div>

    {/* Etapa 6 */}
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">6</div> 
        Duplicar los posts ganadores
      </h3>
      <p className="text-[16px] text-zinc-400 mb-8 leading-relaxed">
        {isSummary 
          ? "Identificar a los ganadores orgánicos y explotarlos al máximo es clave. No insistir lo suficiente con los que funcionan es un error común."
          : "Una vez publicado el contenido orgánico, el siguiente paso es identificar a los \"ganadores\" y explotarlos al máximo. El autor señala que el error más grande que ve en marketers, fundadores y CEOs es no insistir lo suficiente con los posts que funcionan, por no saber cuán agresivo hay que ser."}
      </p>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-[#121214] border border-[#27272A] rounded-[1.5rem] shadow-lg p-7">
          <h4 className="font-semibold text-white mb-5 flex items-center gap-2 text-lg"><CheckCircle2 size={20} className="text-[#55B467]"/> Cómo identificar un ganador</h4>
          <ul className="space-y-5">
            <li className="flex gap-3 text-zinc-300 text-[14px]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#55B467] mt-2 shrink-0"/> 
              <span className="leading-relaxed">
                {isSummary 
                  ? "Verificar si un post generó leads preguntando a los clientes nuevos dónde te vieron."
                  : "Verificar si un post orgánico generó leads efectivamente: revisar si un lead entró cerca de la fecha de un post concreto, preguntarle directamente al lead qué contenido vio de uno, o incluir un campo libre en el formulario de contacto preguntando dónde escuchó hablar de la marca. También sugiere preguntar explícitamente en las llamadas de venta qué post hizo que la persona se contactara."}
              </span>
            </li>
            <li className="flex gap-3 text-zinc-300 text-[14px]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#55B467] mt-2 shrink-0"/> 
              <span className="leading-relaxed">
                {isSummary 
                  ? "Identificar el top 15-20%. Usar ads para los que generen leads o seguidores calificados. Descartar los de muchas impresiones sin leads."
                  : "Identificar el 15-20% superior de los posts según ciertas métricas: si generó leads, llevarlo a anuncios pagos; si generó seguidores calificados, también considerarlo para ads; si tuvo muchas impresiones, igual considerarlo, pero solo avanzar con fuerza si demuestra generar seguidores calificados o leads en pruebas reales —si no, simplemente descartarlo. Aclara que en su experiencia personal, los posts con más impresiones no necesariamente fueron los que generaron más leads."}
              </span>
            </li>
          </ul>
        </div>

        <div className="flex-[1.2] bg-[#1A1A1E] border border-[#D5B15B]/20 rounded-[1.5rem] shadow-lg p-7">
          <h4 className="font-semibold text-white mb-5 flex items-center gap-2 text-lg"><ArrowRight size={20} className="text-[#D5B15B]"/> Cómo "abusar" del ganador</h4>
          <div className="space-y-6 relative">
            <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-[#27272A]"></div>
            
            <div className="flex gap-4 relative z-10">
              <div className="w-6 h-6 rounded-full bg-[#D5B15B] text-black text-xs font-bold flex items-center justify-center shrink-0">1</div>
              <p className="text-zinc-300 pt-0.5 leading-relaxed text-[14px]">
                <strong>Repetir:</strong> {isSummary ? "Volver a subirlo con pequeños ajustes semanas después." : "Repetir el mismo post con pequeños ajustes algunas semanas después, para confirmar si realmente resuena con la audiencia o si fue solo un golpe de suerte del algoritmo."}
              </p>
            </div>
            
            <div className="flex gap-4 relative z-10">
              <div className="w-6 h-6 rounded-full bg-[#D5B15B] text-black text-xs font-bold flex items-center justify-center shrink-0">2</div>
              <p className="text-zinc-300 pt-0.5 leading-relaxed text-[14px]">
                <strong>Testear:</strong> {isSummary ? "Cambiar ganchos, probar otra imagen o CTA." : "Una vez confirmado que el formato, la idea, el gancho y la imagen funcionan, empezar a testear variaciones: acortar o alargar el gancho, hacerlo más amplio o más específico para la audiencia, hacer la imagen más densa o informativa (o incluso \"más confusa\", dice que a veces eso también funciona), agregar una línea de PS pidiendo comentarios, guardados o que lo compartan, mejorar el formato del cuerpo del texto."}
              </p>
            </div>
            
            <div className="flex gap-4 relative z-10">
              <div className="w-6 h-6 rounded-full bg-[#D5B15B] text-black text-xs font-bold flex items-center justify-center shrink-0">3</div>
              <p className="text-zinc-300 pt-0.5 leading-relaxed text-[14px]">
                <strong>Convertir a Video:</strong> {isSummary ? "Hacer un Loom profundizando para captar atención y segmentar con retargeting." : "El paso clave final: convertir ese mismo post en un video de Loom, manteniendo el gráfico o la idea original pero yendo mucho más en profundidad, con más valor y más densidad informativa. Esto sirve para dos cosas: primero, captar más consumo del contenido (la gente que ve el 50% o 75% del video pasa a integrar audiencias de retargeting); y segundo, generar leads de mayor calidad, porque alguien que invirtió más tiempo viendo el contenido está más calificado al llegar más abajo en el embudo."}
              </p>
            </div>
          </div>
          
          {!isSummary && (
            <div className="mt-8 pt-6 border-t border-[#3F3F46]/50">
              <p className="text-[14px] text-[#D5B15B] font-medium leading-relaxed">
                De esta forma, un único post que ya generó leads una vez queda preparado para seguir generando leads durante meses, listo para pasar a la siguiente etapa del embudo (los anuncios de "thought leader").
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  </div>
  );
};


const LinkedInEmailPage = ({ setActivePageId, setSplitPageId }: { setActivePageId: (id: string) => void, setSplitPageId?: (id: string) => void }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSummary, setIsSummary] = useState(false);

  return (
  <div className="max-w-4xl mx-auto w-full pb-20 animate-in fade-in duration-300">
    <div className="flex items-center justify-between mb-12">
      <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
        <ArcadiaLogo />
        <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_parent')}>Arcadia</span>
        <span className="text-zinc-700">/</span>
        <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setActivePageId('linkedin_acquisition_parent')}>Acquisition</span>
      </div>
      
      <div className="flex items-center bg-[#1A1A1E] rounded-lg p-1 border border-zinc-800">
        <button 
          onClick={() => setIsSummary(false)}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${!isSummary ? 'bg-[#27272A] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          Completo
        </button>
        <button 
          onClick={() => setIsSummary(true)}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${isSummary ? 'bg-[#27272A] text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
        >
          Resumido
        </button>
      </div>
    </div>
    
    <div className="flex items-start gap-5 mb-10">
      <div className="border border-[#D5B15B]/30 p-3.5 rounded-2xl text-[#D5B15B] bg-[#1A1A1E] mt-1 shadow-[0_0_20px_rgba(213,177,91,0.15)]">
        <Mail size={28} strokeWidth={1.5} />
      </div>
      <div>
        <h1 className="text-4xl font-bold text-white tracking-tight mb-3">El Sistema de Email</h1>
        <p className="text-[17px] text-zinc-400 leading-relaxed max-w-2xl">
          Estrategia estructurada para convertir listas de correos en clientes de alto valor mediante lead magnets, secuencias de email y seguimientos.
        </p>
      </div>
    </div>

    {/* Fuente de información */}
    <div className="bg-[#121214] border border-[#27272A]/80 rounded-2xl p-5 mb-10 flex items-center justify-between group hover:border-[#D5B15B]/50 transition-colors">
      <div className="flex items-center gap-4">
        <div className="bg-[#1A1A1E] p-3 rounded-xl text-zinc-400 group-hover:text-[#D5B15B] transition-colors border border-zinc-800">
          <LinkIcon size={20} />
        </div>
        <div>
          <h4 className="text-white font-medium text-[15px]">The Email Blueprint</h4>
          <p className="text-zinc-500 text-[13px] mt-0.5">Fuente original del sistema (Notion)</p>
        </div>
      </div>
      <a 
        href="https://library.sevenfigurecreators.com/5/the-email-blueprint"
        target="_blank"
        rel="noreferrer"
        className="px-4 py-2 bg-[#1A1A1E] hover:bg-[#27272A] text-zinc-300 hover:text-white rounded-lg text-sm font-medium transition-colors border border-zinc-800 flex items-center gap-2"
      >
        Ver documento <ExternalLink size={14} />
      </a>
    </div>

    <div className="space-y-12">
      {/* Visión General del Sistema */}
      <div className="bg-[#121214] border border-[#27272A] rounded-[2rem] p-8 lg:p-10 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D5B15B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="mb-8 relative z-10">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Layers size={20} className="text-[#D5B15B]"/> Visión General del Sistema
          </h3>
          <div className="text-[15.5px] text-zinc-300 leading-relaxed mb-6">
            {isSummary 
              ? "Un flujo automatizado de nutrición que incluye un Lead Magnet inicial, 14 días de nutrición, correos regulares y campañas mensuales de oferta (Susurro, Insinuación, Grito)."
              : "A continuación se presenta una estrategia estructurada de email marketing diseñada para convertir listas de correos en clientes de alto valor mediante lead magnets, secuencias de email y seguimientos. Esta guía contiene todos los pasos e instrucciones que necesitás. Seguí leyendo para aprender cómo implementarlo y ejecutarlo."}
          </div>
          
          {!isSummary && (
            <>
              <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Flujo del Sistema</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div><span className="text-zinc-300">Oferta de Lead Magnet</span></div>
                  <div className="w-px h-4 bg-zinc-700 ml-1"></div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div><span className="text-zinc-300">El usuario se suscribe (vía post de LinkedIn, perfil o DM)</span></div>
                  <div className="w-px h-4 bg-zinc-700 ml-1"></div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div><span className="text-zinc-300">Entrega inmediata del Lead Magnet</span></div>
                  <div className="w-px h-4 bg-zinc-700 ml-1"></div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div><span className="text-zinc-300">Secuencia de nutrición por email de 14 días</span></div>
                  <div className="w-px h-4 bg-zinc-700 ml-1"></div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div><span className="text-zinc-300">Transición a emails semanales regulares (3 por semana)</span></div>
                  <div className="w-px h-4 bg-zinc-700 ml-1"></div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div><span className="text-zinc-300">Campaña de oferta mensual (Susurro → Insinuación → Grito)</span></div>
                  <div className="w-px h-4 bg-zinc-700 ml-1"></div>
                  <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#D5B15B]"></div><span className="text-zinc-300">Sistema de seguimiento estructurado para leads interesados</span></div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                 <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-5">
                   <h4 className="font-semibold text-white mb-2 text-sm">Objetivo</h4>
                   <p className="text-[14px] text-zinc-400">Nutrir leads de forma consistente, convertirlos en clientes y mantener un alto nivel de compromiso sin saturar (spamear) tu lista.</p>
                 </div>
                 <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-5">
                   <h4 className="font-semibold text-white mb-2 text-sm">Beneficios clave</h4>
                   <ul className="text-[14px] text-zinc-400 space-y-1 list-disc pl-4">
                     <li>Generar confianza dando valor gratuito por adelantado.</li>
                     <li>Mostrar tu experiencia con emails de nutrición.</li>
                     <li>Mantenerte presente (top of mind) con una cadencia constante.</li>
                     <li>Hacer ofertas mensuales que "invitan" a la gente a trabajar con vos (evitando propuestas que suenen a spam).</li>
                   </ul>
                 </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Paso 1 */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">1</div> 
          Paso 1: Captar Leads con Lead Magnets
        </h3>
        
        {isSummary ? (
          <p className="text-[15px] text-zinc-300 leading-relaxed mb-6">
            Ofrecer contenido gratuito a cambio del email. Promocionarlo en posts de LinkedIn, perfil y DMs. Al suscribirse reciben el recurso y entran a una secuencia de 14 días.
          </p>
        ) : (
          <div className="space-y-6 text-[15.5px] text-zinc-300 leading-relaxed">
            <div>
              <h4 className="font-bold text-white mb-2">Qué hacer:</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Ofrecer contenido gratuito de valor a cambio de un email. Consultá el Lead Magnet Playbook para ideas de contenido valioso.</li>
                <li>Publicar links al lead magnet en tu contenido de LinkedIn, tu perfil y tus mensajes directos.</li>
                <li>Ejemplo: Escribí una pieza de contenido donde, si quieren más información, hagan clic en el link del post y dejen sus datos a cambio del contenido gratuito.</li>
                <li>Ejemplo: Agregá un lead magnet directamente en tu perfil de LinkedIn para que quienes vean tu perfil se conviertan en leads.</li>
                <li>Ejemplo: Usá estos lead magnets en tus DMs. Mirá cómo usarlos para generar confianza en el Sell By Chat Playbook.</li>
              </ul>
            </div>

            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <h4 className="font-semibold text-[#D5B15B] mb-2">Ejemplos de lead magnets efectivos:</h4>
              <p className="text-zinc-400 mb-4 text-sm">(Consultá el Lead Magnet Playbook para más ideas de contenido valioso.)</p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                <li>Guías gratuitas (ej.: "Cómo arreglar tu perfil de LinkedIn en 5 pasos")</li>
                <li>Videos de entrenamiento (ej.: "La estrategia #1 de DM para conseguir más clientes")</li>
                <li>Checklists de Notion (ej.: "Plantilla de calendario de contenido para LinkedIn")</li>
                <li>Archivos de ejemplo de emails (ej.: "Nuestras plantillas de cold email con mejor rendimiento")</li>
                <li>Clases en vivo/webinars (ej.: "Cómo conseguir 5 clientes en 30 días")</li>
              </ul>
            </div>
            
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-6">
              <h4 className="font-bold text-white mb-2">Una vez que se suscriben:</h4>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Reciben el recurso gratuito de inmediato.</li>
                <li>Son redirigidos a agendar una llamada (opcional).</li>
                <li>Entran en una secuencia de nutrición por email de 14 días.</li>
              </ol>
            </div>
          </div>
        )}
      </div>

      {/* Paso 2 */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">2</div> 
          Paso 2: Secuencia de Nutrición por Email de 14 Días
        </h3>
        <p className="text-[15.5px] text-zinc-300 leading-relaxed mb-6">
          {isSummary 
            ? "Una serie de 6 emails en 14 días para entregar valor, tocar dolores principales e invitar a agendar llamada, ideal para captar al 3% listo para comprar ya."
            : "Vas a enviar una serie de emails a lo largo de 14 días para generar cercanía, abordar los principales dolores (pain points) y ofrecer oportunidades de que respondan o agenden llamadas."}
        </p>

        {isSummary ? (
          <div className="space-y-4">
             <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                   <div className="bg-zinc-800 text-white text-xs font-bold px-2.5 py-1 rounded-md">Día 1</div>
                   <h4 className="font-bold text-white">Bienvenida y entrega</h4>
                </div>
                <p className="text-[14.5px] text-zinc-400">Agradecer, entregar el recurso y establecer expectativas. Incluir CTA suave para que respondan con una palabra.</p>
             </div>
             
             <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                   <div className="bg-zinc-800 text-white text-xs font-bold px-2.5 py-1 rounded-md">Día 2</div>
                   <h4 className="font-bold text-white">Identificar su problema</h4>
                </div>
                <p className="text-[14.5px] text-zinc-400">Hacer una pregunta súper simple para lograr que respondan. (Ej: "¿Con qué tipo de clientes trabajás?")</p>
             </div>

             <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                   <div className="bg-zinc-800 text-white text-xs font-bold px-2.5 py-1 rounded-md">Días 5, 9 y 12</div>
                   <h4 className="font-bold text-white">Problema → Agitar → Solución</h4>
                </div>
                <p className="text-[14.5px] text-zinc-400">Tres emails abordando 3 problemas clave distintos. Enfatizar el dolor y ofrecer solución. Añadir P.D. para charla.</p>
             </div>

             <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6 border-b-2 border-b-[#D5B15B]">
                <div className="flex items-center gap-3 mb-2">
                   <div className="bg-zinc-800 text-white text-xs font-bold px-2.5 py-1 rounded-md">Día 14</div>
                   <h4 className="font-bold text-white">Última oportunidad (Invitación)</h4>
                </div>
                <p className="text-[14.5px] text-zinc-400">Invitación suave a trabajar juntos antes de pasar a emails regulares.</p>
             </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <h4 className="font-bold text-white mb-2">Email 1 (Día 1): Bienvenida y entrega del lead magnet</h4>
              <p className="text-zinc-400 text-[14.5px] mb-3"><strong>Asunto:</strong> Acá tenés tu [Nombre del Lead Magnet]</p>
              <div className="text-[15px] text-zinc-300">
                <strong>Contenido:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Agradecerles por descargarlo.</li>
                  <li>Entregar el lead magnet (incluir link o adjunto).</li>
                  <li>Establecer expectativas: los próximos emails los van a ayudar con 3 desafíos clave (las cosas más importantes que enfrenta tu cliente ideal). La razón de mencionar varios desafíos es despertar el interés en aquel que más les preocupa ahora mismo.</li>
                  <li>CTA suave:
                    <ul className="list-circle pl-5 mt-1">
                      <li>"Si estás buscando ayuda para resolver X, respondé 'INSERTAR PALABRA SIMPLE' y charlemos."</li>
                      <li>Tip: Elegí una única palabra que uses siempre para poder rastrearla y que no aparezca al azar en otros emails.</li>
                      <li>Nota: "Voy a tener algunos guiones de plantilla completados para esto."</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <h4 className="font-bold text-white mb-2">Email 2 (Día 2): Identificar su mayor problema</h4>
              <p className="text-zinc-400 text-[14.5px] mb-3"><strong>Asunto:</strong> Que parezca un email interno – ej. "Cómo…"</p>
              <div className="text-[15px] text-zinc-300">
                <strong>Contenido:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Hacerles una pregunta súper simple y fácil de responder.</li>
                  <li>Objetivo: lograr que respondan.</li>
                  <li>Ejemplo: "¿Con qué tipo de clientes trabajás?"</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <h4 className="font-bold text-white mb-2">Emails 3, 4 y 5 (Días 5, 9 y 12): PROBLEMA 1</h4>
              <p className="text-zinc-400 text-[14.5px] mb-3"><strong>Asunto:</strong> EL PROBLEMA</p>
              <div className="text-[15px] text-zinc-300">
                <strong>Contenido:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Vas a enviar 3 emails con estructura similar en los días 5, 9 y 12, cada uno abordando un problema importante distinto (Problema 1, Problema 2, Problema 3).</li>
                  <li>Usar el framework Problema → Agitar → Solución:
                    <ul className="list-circle pl-5 mt-1">
                      <li>Hablar del problema,</li>
                      <li>Por qué importa y cómo podría perjudicarlos,</li>
                      <li>Presentar una solución rápida.</li>
                    </ul>
                  </li>
                  <li>Opcionalmente, adjuntar un link a un video corto de Loom o YouTube demostrando cómo resolver el problema. Puede ser simplemente una captura de pantalla de 5 minutos; no hay que sobrepensarlo.</li>
                  <li>También podés hacer referencia a un caso de estudio de un cliente que resolvió exactamente ese problema.</li>
                  <li>Punto principal: hacerles sentir que entendés profundamente su problema y por qué importa. Vos conocés el problema mejor de lo que ellos mismos podrían describirlo.</li>
                  <li>Asegurate de que sea un problema "analgésico" (painkiller), no una "vitamina". Algo que NECESITEN resolver.</li>
                  <li>Agregar un P.D. al final con una oferta:
                    <ul className="list-circle pl-5 mt-1">
                      <li>"P.D. Si sos [INSERTAR AVATAR] y querés resolver [PROBLEMA], respondé con 'X' y charlemos."</li>
                      <li>Este P.D. opcional les permite contactarte si el dolor les resuena, sin sentirse presionados.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <h4 className="font-bold text-white mb-2">Email 6 (Día 14): Última oportunidad antes de que empiecen los emails regulares</h4>
              <p className="text-zinc-400 text-[14.5px] mb-3"><strong>Asunto:</strong> ¿Trabajamos juntos?</p>
              <div className="text-[15px] text-zinc-300">
                <strong>Contenido:</strong>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>El objetivo es invitarlos a trabajar con vos, no venderles a la fuerza.</li>
                  <li>Recordatorio: resumir lo que aprendieron hasta ahora.</li>
                  <li>Preguntarles si están en serio interesados en mejorar X.</li>
                </ul>
                <div className="mt-4">
                  <strong>Ejemplos:</strong>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>Oferta de coaching grupal:<br/>"El mes que viene voy a trabajar con un pequeño grupo privado de X para lograr RESULTADO sin DOLOR. ¿Te gustaría sumarte?"</li>
                    <li>Oferta de asesor financiero:<br/>"Estoy buscando trabajar con 2 clientes privados más que sean representantes de ventas corporativas ganando entre $300k y $500k al año, con ingresos fluctuantes, que quieran implementar un sistema para construir un patrimonio generacional de múltiples 7 cifras."</li>
                  </ul>
                </div>
                <p className="mt-4"><strong>CTA:</strong> "Respondé 'X' si te podría interesar."</p>
              </div>
            </div>
            
            <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-5 text-[15px] text-zinc-300 mt-6">
              <p className="mb-2">Después de completar esta secuencia de 14 días, los prospectos pasan a la cadencia regular de emails semanales.</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Objetivo de la nutrición de 14 días:</strong> captar ese 3% que podría estar listo para comprar ahora mismo.</li>
                <li>El resto va a seguir recibiendo emails semanales, generando confianza con el tiempo.</li>
                <li><strong>Tip:</strong> Una vez configurado, no tenés que estar reescribiendo esto todo el tiempo. Podés extenderlo o agregar más emails, pero empezá por acá y optimizá después. La implementación le gana a la perfección.</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Paso 3 */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">3</div> 
          Paso 3: Cadencia Regular de Email (3 Emails por Semana)
        </h3>
        
        {isSummary ? (
          <p className="text-[15px] text-zinc-300 leading-relaxed mb-6">
            Enviar 3 emails por semana con valor, prueba social y recursos. Si 3 es mucho, reducir, pero mantener consistencia.
          </p>
        ) : (
          <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-5 text-[15.5px] text-zinc-300 mb-6">
            <p className="mb-2"><strong>Punto clave:</strong> El número de oro es 3 emails por semana. Si eso te resulta estresante, reducilo. Podés enviar solo 1 email por semana o 1 cada dos semanas. Ajustalo según necesites.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>¿Por qué máximo 3?</strong> Nuestras pruebas muestran que superar los 3 por semana puede reducir la efectividad.</li>
              <li>Podés cambiar los días, horarios o el orden. Solo empezá, y después ajustá con los datos.</li>
            </ul>
          </div>
        )}

        {isSummary ? (
          <div className="grid md:grid-cols-3 gap-5">
             <div className="bg-[#1A1A1E] border border-zinc-800 p-6 rounded-2xl">
                <h4 className="font-bold text-white mb-2 text-md flex items-center gap-2">
                   <CalendarDays size={18} className="text-[#D5B15B]" /> Lunes
                </h4>
                <p className="text-[#D5B15B] text-xs font-bold mb-3 uppercase tracking-wider">Historia + Lección</p>
                <p className="text-[14px] text-zinc-400 leading-relaxed">
                   Compartir una experiencia personal. Relacionarla con lo que vendés y por qué importa. Terminar con un CTA suave.
                </p>
             </div>
             <div className="bg-[#1A1A1E] border border-zinc-800 p-6 rounded-2xl">
                <h4 className="font-bold text-white mb-2 text-md flex items-center gap-2">
                   <CalendarDays size={18} className="text-[#D5B15B]" /> Miércoles
                </h4>
                <p className="text-[#D5B15B] text-xs font-bold mb-3 uppercase tracking-wider">Caso de Estudio</p>
                <p className="text-[14px] text-zinc-400 leading-relaxed">
                   Mostrar transformación (antes/después) usando el esquema Problema → Agitar → Solución. Incluir prueba visual o testimonial.
                </p>
             </div>
             <div className="bg-[#1A1A1E] border border-zinc-800 p-6 rounded-2xl">
                <h4 className="font-bold text-white mb-2 text-md flex items-center gap-2">
                   <CalendarDays size={18} className="text-[#D5B15B]" /> Viernes
                </h4>
                <p className="text-[#D5B15B] text-xs font-bold mb-3 uppercase tracking-wider">Recurso Gratuito</p>
                <p className="text-[14px] text-zinc-400 leading-relaxed">
                   Ofrecer plantillas, videos o calculadoras. El objetivo es que respondan al email pidiéndolo para iniciar conversación.
                </p>
             </div>
          </div>
        ) : (
          <div className="space-y-6">
            <h4 className="font-bold text-white mb-2">Cadencia sugerida:</h4>
            
            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <h4 className="font-bold text-[#D5B15B] mb-3">Email 1 (Lunes): Historia + Lección</h4>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300">
                <li>Compartir una experiencia o historia personal. (A veces, cuanto más random, mejor.)</li>
                <li>Relacionarla con lo que vendés y por qué es importante.</li>
                <li>Terminar con un CTA suave:
                  <ul className="list-circle pl-5 mt-1">
                    <li>"Si esto te suena familiar, voy a trabajar con X personas para lograr Y en [PLAZO]. Respondé con 'X' si te podría interesar."</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <h4 className="font-bold text-[#D5B15B] mb-3">Email 2 (Miércoles): Caso de Estudio o Prueba Social</h4>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300">
                <li>Mostrar una transformación (antes/después). No tiene que ser algo enorme; hasta un pequeño logro sirve.</li>
                <li>Usar Problema → Agitar → Solución (PAS):
                  <ul className="list-circle pl-5 mt-1">
                    <li>Problema: ¿cuál era el problema antes de trabajar con vos?</li>
                    <li>Agitar: por qué era doloroso o frustrante.</li>
                    <li>Solución: cómo trabajaron con vos y lo superaron.</li>
                  </ul>
                </li>
                <li>Incluir una captura de pantalla, un link a un video testimonial, o simplemente un testimonio escrito.</li>
                <li>Terminar con un CTA suave:
                  <ul className="list-circle pl-5 mt-1">
                    <li>"Si buscás resolver esto como [PERSONA], respondé con 'X' y charlemos."</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <h4 className="font-bold text-[#D5B15B] mb-3">Email 3 (Viernes): Recurso Gratuito o Valor Extra</h4>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300">
                <li>Con el tiempo, vas a crear recursos (plantillas, calculadoras, videos cortos de Loom, etc.).</li>
                <li>Ofrecer estos recursos en el email.</li>
                <li>Ejemplo:
                  <ul className="list-circle pl-5 mt-1">
                    <li>"Estaba charlando con mi cliente Sean, un asesor financiero de Sydney. Me dijo que estas 5 plantillas de contenido de nuestro programa lo ayudaron a generar 12 leads el mes pasado. ¿Te gustaría que te las comparta?"</li>
                    <li>O: "Acabo de grabar un video de entrenamiento de 15 minutos sobre [PROBLEMA] para que puedas lograr [SOLUCIÓN]. ¿Querés que te lo envíe?"</li>
                  </ul>
                </li>
                <li>Objetivo: lograr que respondan.</li>
                <li>Una vez que responden, podés iniciar una conversación. Ej.: "Acá está [NOMBRE], creo que para vos la plantilla #2 funcionaría muy bien. Por cierto, ¿con qué tipo de clientes trabajás?"</li>
                <li>Opcional: agregar una frase en P.D. invitándolos a charlar, similar a los emails de Historia o Caso de Estudio.</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Paso 4 */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">4</div> 
          Paso 4: Campaña de Oferta Mensual (Método Susurro → Insinuación → Grito)
        </h3>
        <p className="text-[15.5px] text-zinc-300 leading-relaxed mb-6">
          {isSummary 
            ? "Invitar mensualmente a tu lista mediante el método Susurro (CTA suaves), Insinuación (anticipar oferta) y Grito (invitación directa amigable)."
            : "Como vas a ir sumando más gente a tu lista con el tiempo (y sus situaciones de vida pueden cambiar), conviene invitarlos regularmente a trabajar con vos. Usamos el método Susurro, Insinuación, Grito una vez al mes:"}
        </p>

        {isSummary ? (
          <div className="bg-[#121214] border border-[#27272A] rounded-2xl overflow-hidden mb-6">
             <div className="p-5 border-b border-zinc-800 flex flex-col md:flex-row gap-4 md:items-center">
                <div className="w-24 shrink-0 font-bold text-zinc-300 text-sm">Semanas 1-3</div>
                <div>
                   <span className="bg-zinc-800 text-white text-xs font-bold px-2 py-1 rounded mr-2">Susurro</span>
                   <span className="text-[14.5px] text-zinc-400">Hacer ofertas sutiles en los P.D. o CTA de tus correos semanales.</span>
                </div>
             </div>
             <div className="p-5 border-b border-zinc-800 flex flex-col md:flex-row gap-4 md:items-center">
                <div className="w-24 shrink-0 font-bold text-zinc-300 text-sm">Semana 4</div>
                <div>
                   <span className="bg-amber-900/50 text-amber-400 text-xs font-bold px-2 py-1 rounded mr-2 border border-amber-800">Insinuación</span>
                   <span className="text-[14.5px] text-zinc-400">Avisar que algo se viene para generar curiosidad (Ej: "Mañana te mando una invitación a...").</span>
                </div>
             </div>
             <div className="p-5 flex flex-col md:flex-row gap-4 md:items-center bg-[#1A1A1E]">
                <div className="w-24 shrink-0 font-bold text-white text-sm">Fin de mes</div>
                <div>
                   <span className="bg-[#D5B15B]/20 text-[#D5B15B] text-xs font-bold px-2 py-1 rounded mr-2 border border-[#D5B15B]/30">Grito</span>
                   <span className="text-[14.5px] text-zinc-300">Invitación directa pero amigable para unirse a un programa o tomar un lugar disponible.</span>
                </div>
             </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <h4 className="font-bold text-[#D5B15B] mb-2">Susurro (Semanas 1-3)</h4>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300">
                <li>Ya estás haciendo ofertas de forma sutil en cada uno de tus emails semanales (en el CTA o el P.D.).</li>
                <li>La gente no se va a molestar porque es sutil.</li>
              </ul>
            </div>

            <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
              <h4 className="font-bold text-amber-500 mb-2">Insinuación (Semana 4, primer email)</h4>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300">
                <li>Avisarles que algo se viene en unos días. Un email simple, en texto plano, para generar curiosidad.</li>
                <li>Ejemplos:
                  <ul className="list-circle pl-5 mt-1 space-y-1">
                    <li>"Mañana te voy a mandar una invitación a un desafío buenísimo que vamos a hacer la semana que viene para ayudar a [AVATAR] a lograr [RESULTADO]. ¡Estate atento!"</li>
                    <li>"El mes que viene tengo 3 lugares disponibles para trabajar con [AVATAR] y resolver [DOLOR] y lograr [RESULTADO]. Mañana te mando un mensaje para ver si te podría interesar."</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="bg-[#1A1A1E] border border-[#D5B15B]/30 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D5B15B]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <h4 className="font-bold text-[#D5B15B] mb-2 relative z-10">Grito (Último email del mes)</h4>
              <p className="text-zinc-300 text-[15px] mb-3 relative z-10"><strong>Asunto:</strong> ¿Trabajamos juntos?</p>
              <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300 relative z-10">
                <li>Hacer una invitación directa pero amigable, sin romper la confianza generada.</li>
                <li>Ejemplos:
                  <ul className="list-circle pl-5 mt-1 space-y-2">
                    <li>"Hola [NOMBRE], voy a trabajar con un grupo privado de dueños de pequeños negocios el mes que viene que quieren implementar un sistema de LinkedIn para conseguir leads de forma constante sin depender de una agencia. ¿Te gustaría sumarte?"</li>
                    <li>"Hola [NOMBRE], puedo sumar 2 clientes privados más el mes que viene, que sean representantes de ventas corporativas en EE.UU. ganando entre $300k y $500k con ingresos irregulares, buscando construir un fondo de múltiples 7 cifras. ¿Te interesa?"</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        )}
        
        {!isSummary && (
           <div className="bg-[#1A1A1E] border border-zinc-800 p-6 rounded-xl mt-6">
              <h4 className="font-semibold text-white mb-3 text-lg flex items-center gap-2">
                 <RefreshCcw size={18} className="text-blue-400" /> Rotá tus ofertas
              </h4>
              <p className="text-[15px] text-zinc-300 mb-4">Cada mes, rotá la oferta, el avatar o el problema en el que te enfocás.</p>
              <p className="text-[15px] text-zinc-300 font-bold mb-3">Ejemplos de rotación:</p>
              
              <div className="overflow-x-auto">
                 <table className="w-full text-left text-[14.5px] text-zinc-300 border-collapse mb-4">
                    <thead>
                       <tr className="border-b border-zinc-700">
                          <th className="pb-3 pt-3 pr-4 font-bold text-white min-w-[150px]">Tipo de Avatar</th>
                          <th className="pb-3 pt-3 pr-4 font-bold text-white">Mes 1</th>
                          <th className="pb-3 pt-3 pr-4 font-bold text-white">Mes 2</th>
                          <th className="pb-3 pt-3 pr-4 font-bold text-white">Mes 3</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                       <tr>
                          <td className="py-3 pr-4 font-semibold">Foco del Avatar</td>
                          <td className="py-3 pr-4">Representantes de ventas corporativas, ingresos de $300k-$500k</td>
                          <td className="py-3 pr-4">Dueños de pequeños negocios de 45-55 años que quieren vender y retirarse en 10-15 años</td>
                          <td className="py-3 pr-4">Socios de estudios jurídicos</td>
                       </tr>
                    </tbody>
                 </table>
                 
                 <table className="w-full text-left text-[14.5px] text-zinc-300 border-collapse mb-4 mt-6">
                    <thead>
                       <tr className="border-b border-zinc-700">
                          <th className="pb-3 pt-3 pr-4 font-bold text-white min-w-[150px]">Tipo de Problema</th>
                          <th className="pb-3 pt-3 pr-4 font-bold text-white">Mes 1</th>
                          <th className="pb-3 pt-3 pr-4 font-bold text-white">Mes 2</th>
                          <th className="pb-3 pt-3 pr-4 font-bold text-white">Mes 3</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                       <tr>
                          <td className="py-3 pr-4 font-semibold">Foco del Problema</td>
                          <td className="py-3 pr-4">Generar leads entrantes vía contenido</td>
                          <td className="py-3 pr-4">Agendar más llamadas vía DMs</td>
                          <td className="py-3 pr-4">Armar un embudo que capture leads automáticamente en LinkedIn</td>
                       </tr>
                    </tbody>
                 </table>
                 
                 <table className="w-full text-left text-[14.5px] text-zinc-300 border-collapse mt-6">
                    <thead>
                       <tr className="border-b border-zinc-700">
                          <th className="pb-3 pt-3 pr-4 font-bold text-white min-w-[150px]">Tipo de Evento</th>
                          <th className="pb-3 pt-3 pr-4 font-bold text-white">Mes 1</th>
                          <th className="pb-3 pt-3 pr-4 font-bold text-white">Mes 2</th>
                          <th className="pb-3 pt-3 pr-4 font-bold text-white">Mes 3</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                       <tr>
                          <td className="py-3 pr-4 font-semibold">Foco de la Oferta/Evento</td>
                          <td className="py-3 pr-4">Oferta directa</td>
                          <td className="py-3 pr-4">Organizar un desafío en vivo online</td>
                          <td className="py-3 pr-4">Llamada de auditoría GRATIS para un número limitado</td>
                       </tr>
                    </tbody>
                 </table>
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-800">
                 <p className="text-[15px] text-zinc-300"><strong>Objetivo:</strong> Hacer que la oferta mensual se sienta especial y perfectamente alineada con un segmento de tu audiencia.</p>
              </div>
           </div>
        )}
      </div>

      {/* Paso 5 */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#1A1A1E] border border-zinc-700/50 flex items-center justify-center text-[18px] text-[#D5B15B] shadow-inner">5</div> 
          Paso 5: Sistema de Seguimiento Estructurado para Leads Interesados
        </h3>
        <p className="text-[15.5px] text-zinc-300 leading-relaxed mb-6">
          {isSummary 
            ? "Usar AIDA para leads que responden pero no agendan, y hacer seguimientos casuales (hasta 4 en 2 semanas) si dejan de responder."
            : "Cuando alguien responde pero no agenda una llamada, vas a usar AIDA (Atención → Interés → Deseo → Acción):"}
        </p>

        {isSummary ? (
           <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
                 <h4 className="font-bold text-[#D5B15B] mb-4 text-md">Respuestas iniciales (Ejemplos)</h4>
                 <ul className="space-y-4 text-[14px] text-zinc-400">
                    <li className="bg-[#1A1A1E] p-3 rounded-lg">"¿Podrías leer rápido este documento? Si tiene sentido, avisame y coordinamos."</li>
                    <li className="bg-[#1A1A1E] p-3 rounded-lg">"¿Estás disponible mañana a las 9 AM o 11 AM para una llamada rápida de 10 min?"</li>
                    <li className="bg-[#1A1A1E] p-3 rounded-lg">"Antes de agendar, ¿te molesta responder un par de preguntas rápidas?"</li>
                 </ul>
              </div>
              <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
                 <h4 className="font-bold text-[#D5B15B] mb-4 text-md">Seguimientos Casuales</h4>
                 <p className="text-sm text-zinc-500 mb-3">4 veces durante 1-2 semanas si no responden.</p>
                 <ul className="space-y-4 text-[14px] text-zinc-400">
                    <li className="bg-[#1A1A1E] p-3 rounded-lg">"¿Pudiste revisar el documento? Me encantaría agendarte. El viernes me lo tomo para..."</li>
                    <li className="bg-[#1A1A1E] p-3 rounded-lg">"¡Espero no estar siendo pesado! Empiezo la semana que viene y quiero asegurarme de..."</li>
                    <li className="bg-[#1A1A1E] p-3 rounded-lg">"Me da un poco de cosa mandarte esto de nuevo. Está totalmente bien si no te interesa por ahora..."</li>
                 </ul>
              </div>
           </div>
        ) : (
           <div className="space-y-6">
              <div className="bg-[#1A1A1E] border border-zinc-800 rounded-xl p-6">
                 <ul className="list-disc pl-5 space-y-2 text-[15px] text-zinc-300">
                    <li><strong>Atención:</strong> Respondieron a tu email de invitación.</li>
                    <li><strong>Interés:</strong> Muestran interés en la oferta.</li>
                    <li><strong>Deseo:</strong> Les enviás un Documento de Oferta o los derivás a más información.</li>
                    <li><strong>Acción:</strong> Les pedís que confirmen si quieren charlar.</li>
                 </ul>
              </div>

              <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
                 <h4 className="font-bold text-white mb-4 text-md">Opciones de respuesta de ejemplo:</h4>
                 <ul className="space-y-4 text-[15px] text-zinc-300">
                    <li className="bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
                       <span className="block text-zinc-400 text-sm font-semibold mb-2">Respuesta inmediata 1:</span>
                       "Hola [NOMBRE], suena bien. ¿Podrías leer rápido este documento? Es una lectura de 4 minutos sobre cómo podría ayudarte. Si tiene sentido, avisame y coordinamos una charla."
                    </li>
                    <li className="bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
                       <span className="block text-zinc-400 text-sm font-semibold mb-2">Respuesta inmediata 2:</span>
                       "Hola [NOMBRE], suena bien. ¿Estás disponible mañana a las 9 AM o 11 AM para una llamada rápida de 10 minutos para ver si puedo ayudarte?"
                    </li>
                    <li className="bg-[#1A1A1E] p-4 rounded-xl border border-zinc-800">
                       <span className="block text-zinc-400 text-sm font-semibold mb-2">Respuesta inmediata 3:</span>
                       "Hola [NOMBRE], suena bien. Antes de agendar una llamada, ¿te molesta responder un par de preguntas rápidas? Quiero asegurarme de ser la persona indicada para ayudarte."<br/>
                       <span className="text-zinc-500 text-sm mt-1 block">(Después, listar las preguntas de calificación.)</span>
                    </li>
                 </ul>
                 <p className="mt-4 text-[14.5px] text-zinc-400"><strong>Tip:</strong> Registrá las respuestas en una planilla de Google Sheets para ver qué emails tienen mejor rendimiento.</p>
              </div>

              <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-6">
                 <h4 className="font-bold text-white mb-2 text-md">Seguimientos (si dejan de responder)</h4>
                 <p className="text-[15px] text-zinc-300 mb-4">Sugerencia: hacer seguimiento 4 veces durante 1-2 semanas. Ya mostraron interés inicialmente, así que les estás haciendo un favor al recordarles.</p>
                 
                 <h5 className="font-semibold text-white mb-3">Mensajes de seguimiento de ejemplo:</h5>
                 <ul className="space-y-3 text-[15px] text-zinc-300">
                    <li className="flex gap-3"><div className="mt-1 text-[#D5B15B]">-</div><p>"Hola [NOMBRE], ¿pudiste revisar el documento? Me encantaría agendarte en mi calendario. Voy a tomarme el viernes libre para llevar a mi hija a su recital de baile, ¡está súper emocionada!"</p></li>
                    <li className="flex gap-3"><div className="mt-1 text-[#D5B15B]">-</div><p>"Hola [NOMBRE], el recital de baile estuvo divertidísimo pero también un poco triste. Bailó la mitad, después se tropezó y lloró el resto. De todas formas, ¿pudiste revisar el documento?"</p></li>
                    <li className="flex gap-3"><div className="mt-1 text-[#D5B15B]">-</div><p>"Hola [NOMBRE], ¡espero no estar siendo pesado! Empiezo la semana que viene, y quiero asegurarme de que si te interesa, tengamos la oportunidad de charlar."</p></li>
                    <li className="flex gap-3"><div className="mt-1 text-[#D5B15B]">-</div><p>"Hola [NOMBRE], me da un poco de cosa mandarte esto de nuevo. Está totalmente bien si no te interesa por ahora. Avisame y puedo anotar para hacer seguimiento en unos meses. ¡Sin problema de cualquier forma!"</p></li>
                 </ul>
                 <div className="mt-5 p-4 bg-[#1A1A1E] rounded-xl border border-zinc-800">
                    <p className="text-[14.5px] text-zinc-300"><strong>Importante:</strong> Hacer que estos emails se sientan casuales y espontáneos, no como seguimientos automatizados.</p>
                 </div>
              </div>
           </div>
        )}
      </div>

      {/* Notas Finales */}
      {!isSummary && (
        <div className="mb-10">
          <div className="bg-[#121214] border border-[#27272A] rounded-2xl p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#D5B15B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <h3 className="text-xl font-bold text-white mb-5 relative z-10">Notas Finales y Plan de Ejecución</h3>
             
             <ol className="list-decimal pl-5 space-y-3 text-[15.5px] text-zinc-300 relative z-10 mb-6 font-medium">
               <li>Configurar un sistema de suscripción para tu lead magnet.</li>
               <li>Implementar la secuencia de nutrición de 14 días (Emails 1 al 6).</li>
               <li>Enviar tres emails por semana de forma consistente (o ajustar si 3 es demasiado).</li>
               <li>Ejecutar una campaña de oferta mensual (Susurro, Insinuación, Grito).</li>
               <li>Hacer seguimiento estratégico a los leads interesados usando AIDA.</li>
               <li>Ajustar los mensajes según tu audiencia objetivo.</li>
             </ol>
             
             <div className="p-5 bg-[#1A1A1E] rounded-xl border border-zinc-800 relative z-10">
                <p className="text-[15px] text-zinc-300 leading-relaxed">
                   <strong>Recordá:</strong> Este sistema asegura que nutras leads de forma consistente, los conviertas en clientes y mantengas un alto nivel de compromiso sin saturar. Una vez configurado, simplemente hay que mantenerlo y optimizarlo.
                </p>
             </div>
          </div>
        </div>
      )}
      {/* Botón de Plantillas */}
      <div className="mt-12 flex justify-center pb-8">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#D5B15B] hover:bg-[#E8CD82] text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(213,177,91,0.3)] flex items-center gap-2"
        >
          <Mail size={20} />
          Ver Plantillas de Email
        </button>
      </div>


      {/* Modal de Plantillas */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#121214] border border-zinc-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-zinc-800 bg-[#1A1A1E]">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Mail className="text-[#D5B15B]" /> Plantillas de Email
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-full"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8 overflow-y-auto flex-1 bg-[#131313]">
              <div className="space-y-8">
                {emailTemplates.map((template, index) => (
                  <div key={index} className="bg-[#121214] border border-zinc-800/80 rounded-2xl overflow-hidden group hover:border-[#D5B15B]/30 transition-colors">
                    <div className="bg-[#1A1A1E] border-b border-zinc-800 p-5">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold bg-[#27272A] text-zinc-300 px-2.5 py-1 rounded-md">{template.date}</span>
                      </div>
                      <h4 className="text-lg font-bold text-white leading-snug">Asunto: {template.subject}</h4>
                    </div>
                    <div className="p-6">
                      <div className="text-[14.5px] text-zinc-300 whitespace-pre-wrap leading-relaxed font-mono bg-[#1A1A1E]/50 p-5 rounded-xl border border-zinc-800/50">
                        {template.body}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  </div>
  );
};
const CustomPageEditor = ({ page, updatePage }: { page: Page, updatePage: (id: string, updates: Partial<Page>) => void }) => {
  const wordCount = (page.content || '').split(/\s+/).filter(w => w.length > 0).length;
  const charCount = (page.content || '').length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div className="max-w-4xl mx-auto w-full flex flex-col h-full min-h-[80vh] animate-in fade-in duration-300 pt-10 relative">
      <input 
        type="text" 
        value={page.title} 
        onChange={(e) => updatePage(page.id, { title: e.target.value })}
        className="bg-transparent text-4xl font-bold text-white placeholder-zinc-700 outline-none mb-6 w-full"
        placeholder="Untitled document"
      />
      <textarea 
        value={page.content || ''}
        onChange={(e) => updatePage(page.id, { content: e.target.value })}
        className="bg-transparent text-zinc-300 outline-none flex-1 resize-none text-[15px] leading-relaxed w-full placeholder-zinc-700 pb-20"
        placeholder="Write content, newsletters, scripts, and more..."
      />
      
      {/* Bottom Status Bar */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between text-[11px] font-medium text-zinc-500">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-white/10 bg-[#1A1A1E] cursor-pointer hover:bg-white/5 transition-colors">
            <Brain size={12} className="text-zinc-400" />
            <span className="text-zinc-300">Neural</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-white/10 bg-[#1A1A1E] cursor-pointer hover:bg-white/5 transition-colors">
            <LinkIcon size={12} className="text-zinc-400" />
          </div>
        </div>
        <div className="flex items-center px-3 py-1.5 rounded-md border border-white/10 bg-[#1A1A1E]">
          {readTime} min read · {wordCount}w · {charCount}c
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [pages, setPages] = useState<Page[]>(() => {
    const saved = localStorage.getItem('arcadia_pages');
    if (saved) {
      let parsedPages = JSON.parse(saved);
      parsedPages = parsedPages.filter((p: Page) => p.title !== 'jhhb' && p.title !== 'Nueva Página');
      
      // Remove any old default pages that are no longer in defaultPages array
      parsedPages = parsedPages.filter((p: Page) => {
        if (p.type?.startsWith('default_')) {
          return defaultPages.some(dp => dp.id === p.id);
        }
        return true;
      });

      const missingDefaults = defaultPages.filter(dp => !parsedPages.some((p: Page) => p.id === dp.id));
      
      const updatedPages = parsedPages.map((p: Page) => {
        const dp = defaultPages.find(d => d.id === p.id);
        if (dp) {
          p.title = dp.title;
          p.section = dp.section;
        }
        return p;
      });

      return [...updatedPages, ...missingDefaults];
    }
    return defaultPages;
  });
  const [activePageId, setActivePageId] = useState('tesis_acquisition');
  const [splitPageId, setSplitPageId] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(260);
  const [leftPaneRatio, setLeftPaneRatio] = useState(50);
  const isResizingSidebar = useRef(false);
  const isResizingPanes = useRef(false);
  const [tesisExpanded, setTesisExpanded] = useState(true);
  const [aprendizajesExpanded, setAprendizajesExpanded] = useState(true);
  const [expandedPages, setExpandedPages] = useState<Record<string, boolean>>({});
  const [cleansExpanded, setCleansExpanded] = useState(true);

  const togglePageExpand = (pageId: string) => {
    setExpandedPages(prev => ({ ...prev, [pageId]: prev[pageId] === undefined ? false : !prev[pageId] }));
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    localStorage.setItem('arcadia_pages', JSON.stringify(pages));
  }, [pages]);

    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        if (isResizingSidebar.current) {
          let newWidth = e.clientX;
          if (newWidth < 200) newWidth = 200;
          if (newWidth > 600) newWidth = 600;
          setSidebarWidth(newWidth);
        } else if (isResizingPanes.current) {
          const sidebarOffset = sidebarOpen ? sidebarWidth : 0;
          const availableWidth = window.innerWidth - sidebarOffset;
          const mouseX = e.clientX - sidebarOffset;
          let ratio = (mouseX / availableWidth) * 100;
          if (ratio < 20) ratio = 20;
          if (ratio > 80) ratio = 80;
          setLeftPaneRatio(ratio);
        }
      };

      const handleMouseUp = () => {
        if (isResizingSidebar.current || isResizingPanes.current) {
          isResizingSidebar.current = false;
          isResizingPanes.current = false;
          document.body.style.cursor = 'default';
          document.body.style.userSelect = 'auto';
        }
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }, [sidebarOpen, sidebarWidth]);
    

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const addPage = () => {
    const newPage: Page = {
      id: Date.now().toString(),
      title: '',
      type: 'custom',
      content: ''
    };
    setPages([...pages, newPage]);
    setActivePageId(newPage.id);
    if (isMobile) setSidebarOpen(false);
  };

  const addCleanPage = () => {
    const newPage: Page = {
      id: Date.now().toString(),
      title: '',
      type: 'clean',
      content: '',
      section: 'cleans',
      cleanBlocks: []
    };
    setPages([...pages, newPage]);
    setActivePageId(newPage.id);
    if (isMobile) setSidebarOpen(false);
  };

  const updatePage = (id: string, updates: Partial<Page>) => {
    setPages(pages.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deletePage = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const newPages = pages.filter(p => p.id !== id);
    setPages(newPages);
    if (activePageId === id && newPages.length > 0) {
      setActivePageId(newPages[0].id);
    }
  };

  const activePage = pages.find(p => p.id === activePageId);

  const getPageIcon = (type: string) => {
    if (type === 'default_plan') return <Database size={16} />;
    if (type === 'default_etapa') return <LayoutGrid size={16} />;
    if (type === 'default_contenido') return <Video size={16} />;
    if (type === 'default_linkedin_parent') return <Layers size={16} />;
    if (type === 'default_linkedin_acquisition_parent') return <UserPlus size={16} />;
    if (type === 'default_linkedin_insight_parent') return <LineChart size={16} />;
    if (type === 'default_marketing_parent') return <Megaphone size={16} />;
    if (type === 'default_marketing_asimilacion') return <Target size={16} />;
    if (type === 'default_tesis_acquisition') return <UserPlus size={16} />;
    if (type === 'default_ads_parent') return <Target size={16} />;
    if (type === 'default_tesis_outbound_mdr_sdr') return <Briefcase size={16} />;
    if (type === 'default_tesis_jeremy_ads') return <Target size={16} />;
    if (type === 'default_tesis_keep_ads_profitable') return <Target size={16} />;
    if (type === 'default_tesis_pixel_conditioning') return <Target size={16} />;
    if (type === 'default_tesis_3cs') return <Target size={16} />;
    if (type === 'default_tesis_trent_consulting') return <Target size={16} />;
    if (type === 'default_tesis_scale_meta_ads') return <Target size={16} />;
    if (type === 'default_model_parent') return <Brain size={16} />;
    if (type === 'default_model_if100k') return <DollarSign size={16} />;
    if (type === 'default_sales_parent') return <Target size={16} />;
    if (type === 'default_sales_16m') return <DollarSign size={16} />;
    if (type === 'default_sales_showrate') return <Phone size={16} />;
    if (type === 'default_sales_showrate_course') return <BarChart size={16} />;
    if (type === 'default_linkedin_insight_summary') return <PlayCircle size={16} />;
    if (type === 'default_linkedin_insight_gtm') return <BarChart size={16} />;
    if (type === 'default_linkedin_vistas') return <Magnet size={16} />;
    if (type === 'default_linkedin_outbound') return <MessageSquare size={16} />;
    if (type === 'default_linkedin_angulos') return <Target size={16} />;
    if (type === 'default_linkedin_ideas') return <Lightbulb size={16} />;
    if (type === 'default_linkedin_email') return <Mail size={16} />;
    if (type === 'default_linkedin_content') return <PenTool size={16} />;
    return <FileText size={16} />;
  };

  return (
    <div className="flex h-screen bg-[#131313] text-zinc-300 selection:bg-[#D5B15B]/30 overflow-hidden font-sans">
      
      {/* Mobile Sidebar Overlay */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed md:relative inset-y-0 left-0 z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0 md:w-0 md:opacity-0 md:overflow-hidden'
        }`}
      >
        <div style={{ width: isMobile ? 260 : sidebarWidth }} className="flex flex-col h-[calc(100vh-24px)] m-3 relative bg-[#171717] border border-white/5 rounded-[24px] overflow-hidden shadow-2xl shrink-0">
          <div className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-6">
            
            {/* Create or search */}
            <div onClick={() => setIsSearchModalOpen(true)} className="flex items-center justify-between px-3 py-2.5 bg-[#1F1F1F] hover:bg-[#2A2A2A] border border-white/5 rounded-[14px] cursor-pointer transition-colors group">
              <div className="flex items-center gap-3 text-zinc-300">
                <Plus size={18} className="text-zinc-400" />
                <span className="text-[14px] font-medium text-zinc-200">Create or search</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] font-semibold text-zinc-500 bg-[#141414] px-1.5 py-0.5 rounded-md border border-white/10">
                <span>Ctrl</span><span>K</span>
              </div>
            </div>

            {/* Main Nav */}
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center justify-between px-3 py-2 text-zinc-400 hover:bg-white/5 hover:text-zinc-200 rounded-xl cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <Home size={18} strokeWidth={2} />
                  <span className="text-[14px] font-medium">Home</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-500">
                  <div className="w-3 h-3 rounded-full border-[2.5px] border-zinc-500/30 border-t-zinc-300"></div>
                  <span className="text-[12px] font-semibold">2/4</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-3 py-2 bg-[#2B2B2B] text-zinc-200 rounded-xl cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <Layers size={18} strokeWidth={2} />
                  <span className="text-[14px] font-medium">Library</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-3 py-2 text-zinc-400 hover:bg-white/5 hover:text-zinc-200 rounded-xl cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <Compass size={18} strokeWidth={2} />
                  <span className="text-[14px] font-medium">Discover</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-3 py-2 text-zinc-400 hover:bg-white/5 hover:text-zinc-200 rounded-xl cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-[18px] flex justify-center"><span className="tracking-widest font-bold text-[14px] -mt-2">...</span></div>
                  <span className="text-[14px] font-medium">More</span>
                </div>
              </div>
            </div>

            {/* Chats Section */}
            <div className="flex flex-col">
              <div 
                onClick={() => setTesisExpanded(!tesisExpanded)}
                className="text-[13px] font-medium text-zinc-500 mb-2 px-3 cursor-pointer hover:text-zinc-300 transition-colors"
              >
                Chats
              </div>
              {tesisExpanded && (
                <div className="flex flex-col gap-0.5">
                  {pages.filter(p => !p.parentId && p.section === 'tesis').length === 0 ? (
                    <div className="px-3 py-1">
                      <span className="text-[13px] text-zinc-600">No chats</span>
                    </div>
                  ) : (
                    pages.filter(p => !p.parentId && p.section === 'tesis').map((page) => (
                      <div 
                        key={page.id}
                        onClick={() => {
                          setActivePageId(page.id);
                          if (isMobile) setSidebarOpen(false);
                        }}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer group transition-colors ${
                          activePageId === page.id ? 'bg-[#2B2B2B] text-zinc-200' : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200'
                        }`}
                      >
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0 ml-1"></div>
                          <span className="text-[14px] font-medium truncate">
                            {page.title || 'Nueva Página'}
                          </span>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 flex items-center gap-1 shrink-0">
                            <div 
                              className="p-1 hover:text-white transition-all text-zinc-500"
                              onClick={(e) => { e.stopPropagation(); setSplitPageId(page.id); }}
                              title="Open in split view"
                            >
                              <PanelRightOpen size={14} />
                            </div>
                            {page.type === 'custom' ? (
                              <div 
                                className="p-1 hover:text-[#C06C5A] transition-all text-zinc-500"
                                onClick={(e) => deletePage(e, page.id)}
                              >
                                <Trash2 size={14} />
                              </div>
                            ) : (
                              <span className="text-[12px] font-medium text-[#C06C5A] opacity-90 group-hover:opacity-100 shrink-0">26 jun</span>
                            )}
                          </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Boards Section */}
            <div className="flex flex-col">
              <div 
                onClick={() => setAprendizajesExpanded(!aprendizajesExpanded)}
                className="text-[13px] font-medium text-zinc-500 mb-2 px-3 cursor-pointer hover:text-zinc-300 transition-colors"
              >
                Boards
              </div>
              {aprendizajesExpanded && (
                <div className="flex flex-col gap-0.5">
                  {pages.filter(p => !p.parentId && p.section !== 'tesis' && p.section !== 'cleans').length === 0 ? (
                    <div className="px-3 py-1">
                      <span className="text-[13px] text-zinc-600">No boards</span>
                    </div>
                  ) : (
                    pages.filter(p => !p.parentId && p.section !== 'tesis' && p.section !== 'cleans').map((page) => (
                      <div 
                        key={page.id}
                        onClick={() => {
                          setActivePageId(page.id);
                          if (isMobile) setSidebarOpen(false);
                        }}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer group transition-colors ${
                          activePageId === page.id ? 'bg-[#2B2B2B] text-zinc-200' : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200'
                        }`}
                      >
                        <div className="flex items-center gap-3 overflow-hidden">
                          <LayoutGrid size={16} strokeWidth={2} className="text-zinc-500 ml-0.5" />
                          <span className="text-[14px] font-medium truncate">
                            {page.title || 'Nueva Página'}
                          </span>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 flex items-center gap-1 shrink-0">
                            <div 
                              className="p-1 hover:text-white transition-all text-zinc-500"
                              onClick={(e) => { e.stopPropagation(); setSplitPageId(page.id); }}
                              title="Open in split view"
                            >
                              <PanelRightOpen size={14} />
                            </div>
                            {page.type === 'custom' && (
                              <div 
                                className="p-1 hover:text-[#C06C5A] transition-all text-zinc-500"
                                onClick={(e) => deletePage(e, page.id)}
                              >
                                <Trash2 size={14} />
                              </div>
                            )}
                          </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Cleans Section */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-2 px-3">
                <div 
                  onClick={() => setCleansExpanded(!cleansExpanded)}
                  className="text-[13px] font-medium text-zinc-500 cursor-pointer hover:text-zinc-300 transition-colors"
                >
                  Cleans
                </div>
                <div 
                  onClick={addCleanPage}
                  className="text-zinc-500 hover:text-white cursor-pointer transition-colors p-1"
                >
                  <Plus size={14} />
                </div>
              </div>
              {cleansExpanded && (
                <div className="flex flex-col gap-0.5">
                  {pages.filter(p => !p.parentId && p.section === 'cleans').length === 0 ? (
                    <div className="px-3 py-1">
                      <span className="text-[13px] text-zinc-600">No cleans</span>
                    </div>
                  ) : (
                    pages.filter(p => !p.parentId && p.section === 'cleans').map((page) => (
                      <div 
                        key={page.id}
                        onClick={() => {
                          setActivePageId(page.id);
                          if (isMobile) setSidebarOpen(false);
                        }}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer group transition-colors ${
                          activePageId === page.id ? 'bg-[#2B2B2B] text-zinc-200' : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-200'
                        }`}
                      >
                        <div className="flex items-center gap-3 overflow-hidden">
                          <FileText size={16} strokeWidth={2} className="text-zinc-500 ml-0.5" />
                          <span className="text-[14px] font-medium truncate">
                            {page.title || 'Nueva Página'}
                          </span>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 flex items-center gap-1 shrink-0">
                            <div 
                              className="p-1 hover:text-white transition-all text-zinc-500"
                              onClick={(e) => { e.stopPropagation(); setSplitPageId(page.id); }}
                              title="Open in split view"
                            >
                              <PanelRightOpen size={14} />
                            </div>
                            <div 
                              className="p-1 hover:text-[#C06C5A] transition-all text-zinc-500"
                              onClick={(e) => deletePage(e, page.id)}
                            >
                              <Trash2 size={14} />
                            </div>
                          </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

          </div>

          {/* Bottom Section */}
          <div className="px-3 py-4 border-t border-white/5 flex flex-col gap-0.5 bg-[#171717]">
            <div className="flex items-center justify-between px-3 py-2 text-zinc-400 hover:bg-white/5 hover:text-zinc-200 rounded-xl cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <Compass size={18} strokeWidth={2} />
                <span className="text-[14px] font-medium">More from Eden</span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-500">
                <div className="w-3 h-3 rounded-full border-[2.5px] border-zinc-500/30"></div>
                <span className="text-[12px] font-semibold">0/5</span>
              </div>
            </div>
            <div className="flex items-center justify-between px-3 py-2 text-zinc-400 hover:bg-white/5 hover:text-zinc-200 rounded-xl cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                </div>
                <span className="text-[14px] font-medium">Academy</span>
              </div>
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-1"></div>
            </div>
            
            <div className="flex items-center justify-between px-2 py-2 mt-1 text-zinc-400 hover:bg-white/5 hover:text-zinc-200 rounded-xl cursor-pointer transition-colors group">
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div className="w-6 h-6 rounded-full bg-[#2A2A2A] text-zinc-300 flex items-center justify-center text-[11px] font-semibold shrink-0">
                  L
                </div>
                <span className="text-[14px] font-medium truncate">Lucacesped...</span>
                <ChevronDown size={14} className="text-zinc-500" />
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <div className="p-1 hover:text-zinc-300 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/></svg>
                </div>
                <div className="p-1 hover:text-zinc-300 transition-colors">
                  <Trash2 size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      
        {/* Sidebar Resize Handle */}
        {!isMobile && sidebarOpen && (
          <div 
            className="absolute right-[-6px] top-0 bottom-0 w-3 cursor-col-resize hover:bg-white/10 transition-colors z-50 flex items-center justify-center group"
            onMouseDown={(e) => {
              e.preventDefault();
              isResizingSidebar.current = true;
              document.body.style.cursor = 'col-resize';
              document.body.style.userSelect = 'none';
            }}
          >
            <div className="w-[2px] h-8 bg-white/20 rounded-full group-hover:bg-white/50 transition-colors" />
          </div>
        )}

      </div>
        
        {/* Main Content Area */}
      <div className={`flex-1 flex gap-3 h-screen py-3 pr-3 overflow-hidden bg-[#131313] ${!sidebarOpen ? 'pl-3' : 'pl-0'}`}>
        
        {/* Left Pane (Active Page) */}
        <div style={{ flex: splitPageId && !isMobile ? `0 0 calc(${leftPaneRatio}% - 6px)` : '1 1 0%' }} className={`flex flex-col relative bg-[#171717] border border-white/5 rounded-[24px] overflow-hidden shadow-2xl ${splitPageId ? 'hidden md:flex' : 'flex'}`}>
          {/* Topbar */}
          <div className="h-14 flex items-center justify-between px-6 shrink-0 border-b border-transparent">
            <div className="flex items-center gap-2 text-zinc-400">
              {(!sidebarOpen || isMobile) && (
                <button 
                  onClick={() => setSidebarOpen(true)}
                  className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-zinc-400 hover:text-white mr-2"
                >
                  <PanelLeft size={18} />
                </button>
              )}
              {sidebarOpen && !isMobile && (
                <button 
                  onClick={() => setSidebarOpen(false)}
                  className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-zinc-400 hover:text-white mr-2"
                >
                  <PanelLeftClose size={18} />
                </button>
              )}
              {activePage?.parentId && (
                <button 
                  onClick={() => setActivePageId(activePage.parentId!)}
                  className="p-1.5 hover:bg-white/10 rounded-md transition-colors hover:text-white"
                >
                  <ArrowRight size={16} className="rotate-180" />
                </button>
              )}
              <span className="text-[14px] font-medium ml-1 text-zinc-300">{activePage?.title || 'Document'}</span>
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
            {activePage?.type === 'default_ads_parent' && <AdsParentPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_tesis_outbound_mdr_sdr' && <TesisOutboundMdrSdrPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_tesis_jeremy_ads' && <TesisJeremyAdsPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_tesis_keep_ads_profitable' && <TesisKeepAdsProfitablePage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_tesis_pixel_conditioning' && <TesisPixelConditioningPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_tesis_3cs' && <Tesis3CsPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_tesis_trent_consulting' && <TesisTrentConsultingPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_tesis_scale_meta_ads' && <TesisScaleMetaAdsPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_model_parent' && <ModelParentPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_model_if100k' && <ModelIf100kPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_sales_parent' && <SalesParentPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_sales_16m' && <Sales16MPage setActivePageId={setActivePageId} />}
            {activePage?.type === 'default_sales_showrate' && <SalesShowRatePage setActivePageId={setActivePageId} />}
              {activePage?.type === 'default_sales_showrate_course' && <SalesShowRateCoursePage setActivePageId={setActivePageId} />}
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
            {activePage?.type === 'clean' && <CleansEditorPage page={activePage} updatePage={updatePage} />}
          </div>
        </div>

        
          {/* Panes Resize Handle */}
          {splitPageId && !isMobile && (
            <div 
              className="w-3 cursor-col-resize hover:bg-white/10 transition-colors flex items-center justify-center group shrink-0 rounded-full"
              onMouseDown={(e) => {
                e.preventDefault();
                isResizingPanes.current = true;
                document.body.style.cursor = 'col-resize';
                document.body.style.userSelect = 'none';
              }}
            >
              <div className="w-[2px] h-8 bg-white/20 rounded-full group-hover:bg-white/50 transition-colors" />
            </div>
          )}


          {/* Right Pane (Split Page) */}
        {splitPageId && (() => {
          const splitPage = pages.find(p => p.id === splitPageId);
          return (
            <div style={{ flex: `1 1 0%` }} className="flex flex-col relative bg-[#171717] border border-white/5 rounded-[24px] overflow-hidden shadow-2xl animate-in slide-in-from-right-8 duration-300 transform-gpu hidden md:flex">
              {/* Topbar */}
              <div className="h-14 flex items-center justify-between px-6 shrink-0 border-b border-transparent">
                <div className="flex items-center gap-2 text-zinc-400">
                  {splitPage?.parentId && (
                    <button 
                      onClick={() => setSplitPageId(splitPage.parentId!)}
                      className="p-1.5 hover:bg-white/10 rounded-md transition-colors hover:text-white"
                    >
                      <ArrowRight size={16} className="rotate-180" />
                    </button>
                  )}
                  <span className="text-[14px] font-medium ml-1 text-zinc-300">{splitPage?.title || 'Document'}</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-500">
                  <MessageSquare size={16} className="cursor-pointer hover:text-zinc-300 transition-colors" />
                  <Share2 size={16} className="cursor-pointer hover:text-zinc-300 transition-colors" />
                  <Settings size={16} className="cursor-pointer hover:text-zinc-300 transition-colors" />
                  <ArrowLeftRight size={16} className="cursor-pointer hover:text-zinc-300 transition-colors" onClick={() => {
                    const currentActive = activePageId;
                    setActivePageId(splitPageId!);
                    setSplitPageId(currentActive);
                  }} />
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
                {splitPage?.type === 'default_ads_parent' && <AdsParentPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_tesis_outbound_mdr_sdr' && <TesisOutboundMdrSdrPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_tesis_jeremy_ads' && <TesisJeremyAdsPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_tesis_keep_ads_profitable' && <TesisKeepAdsProfitablePage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_tesis_pixel_conditioning' && <TesisPixelConditioningPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_tesis_3cs' && <Tesis3CsPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_tesis_trent_consulting' && <TesisTrentConsultingPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_tesis_scale_meta_ads' && <TesisScaleMetaAdsPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_model_parent' && <ModelParentPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_model_if100k' && <ModelIf100kPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_sales_parent' && <SalesParentPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_sales_16m' && <Sales16MPage setActivePageId={setSplitPageId} />}
                {splitPage?.type === 'default_sales_showrate' && <SalesShowRatePage setActivePageId={setSplitPageId} />}
                  {splitPage?.type === 'default_sales_showrate_course' && <SalesShowRateCoursePage setActivePageId={setSplitPageId} />}
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
                {splitPage?.type === 'clean' && <CleansEditorPage page={splitPage} updatePage={updatePage} />}
              </div>
            </div>
          );
        })()}

      </div>
    
      {/* Search Modal */}
      {isSearchModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setIsSearchModalOpen(false)}>
          <div 
            className="bg-[#1A1A1E] border border-zinc-800 rounded-2xl w-full max-w-2xl flex flex-col overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-4 border-b border-zinc-800">
              <Search size={20} className="text-zinc-400" />
              <input 
                autoFocus
                type="text" 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search pages..."
                className="flex-1 bg-transparent text-white outline-none placeholder-zinc-500 text-[15px]"
              />
              <div className="text-[10px] font-semibold text-zinc-500 bg-[#141414] px-1.5 py-0.5 rounded-md border border-white/10">ESC</div>
            </div>
            <div className="max-h-[60vh] overflow-y-auto custom-scrollbar p-2">
              {pages.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.id.toLowerCase().includes(searchQuery.toLowerCase())).map(page => (
                <div 
                  key={page.id}
                  onClick={() => {
                    setActivePageId(page.id);
                    setIsSearchModalOpen(false);
                    setSearchQuery('');
                  }}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 cursor-pointer transition-colors"
                >
                  <FileText size={16} className="text-zinc-500" />
                  <span className="text-zinc-300 text-[14px] font-medium">{page.title || 'Untitled'}</span>
                  {page.type !== 'custom' && (
                    <span className="ml-auto text-[11px] text-zinc-500 border border-white/10 px-1.5 py-0.5 rounded">Template</span>
                  )}
                </div>
              ))}
              {pages.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.id.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                <div className="p-8 text-center text-zinc-500 text-[14px]">
                  No pages found
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
}

