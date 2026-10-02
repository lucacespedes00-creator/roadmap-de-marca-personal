import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

content = content.replace(/<p className="font-bold text-white mb-2 flex items-center gap-2">\s*<div className="w-2 h-2 rounded-full bg-blue-400"><\/div>\s*Si eres el dueño\/fundador, y estás tratando de conservar tiempo\.\s*<\/p>/g,
  '<div className="font-bold text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-400"></div>Si eres el dueño/fundador, y estás tratando de conservar tiempo.</div>'
);

content = content.replace(/<p className="font-bold text-white mb-2 flex items-center gap-2">\s*<div className="w-2 h-2 rounded-full bg-blue-400"><\/div>\s*Si tus prospectos constantemente se presentan a la cita en una situación de no-compra\s*<\/p>/g,
  '<div className="font-bold text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-400"></div>Si tus prospectos constantemente se presentan a la cita en una situación de no-compra</div>'
);

content = content.replace(/<p className="font-bold text-white mb-2 flex items-center gap-2">\s*<div className="w-2 h-2 rounded-full bg-blue-400"><\/div>\s*Si lo que vendes tiene calificaciones estrictas y la mayoría de la gente no califica\s*<\/p>/g,
  '<div className="font-bold text-white mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-400"></div>Si lo que vendes tiene calificaciones estrictas y la mayoría de la gente no califica</div>'
);

fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);
