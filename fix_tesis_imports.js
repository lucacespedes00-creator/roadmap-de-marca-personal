import fs from 'fs';
let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const oldImports = `import { Pin, PinOff, Columns, Maximize2, ArrowDown, Layers, UserPlus, Briefcase, PhoneCall, Mail, Megaphone, Target, CheckCircle2, XCircle, AlertTriangle, BarChart, TrendingUp, Users, DollarSign, BookOpen, Calculator , Activity , ListOrdered , MessageSquare , Clock , Filter , ArrowLeft , MessageCircle , Zap , MousePointerClick , Settings , Cpu } from 'lucide-react';`;
const newImports = `import { Pin, PinOff, Columns, Maximize2, ArrowDown, Layers, UserPlus, Briefcase, PhoneCall, Mail, Megaphone, Target, CheckCircle2, XCircle, AlertTriangle, BarChart, TrendingUp, Users, DollarSign, BookOpen, Calculator , Activity , ListOrdered , MessageSquare , Clock , Filter , ArrowLeft , MessageCircle , Zap , MousePointerClick , Settings , Cpu, FileText } from 'lucide-react';`;
content = content.replace(oldImports, newImports);
fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);
