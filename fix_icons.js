import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

const missingIcons = ['CheckCircle2', 'TrendingUp', 'AlertTriangle'];
for (const icon of missingIcons) {
  if (!content.includes(` ${icon},`) && !content.includes(`, ${icon} `) && !content.includes(`{ ${icon} }`)) {
    content = content.replace(/import \{([^\}]+)\} from 'lucide-react';/, `import {$1, ${icon} } from 'lucide-react';`);
  }
}

fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', content);

