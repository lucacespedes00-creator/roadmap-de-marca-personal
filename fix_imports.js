import fs from 'fs';
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Revert the mistake
content = content.replace("import { PanelLeft, PanelLeftClose, emailTemplates } from './emailTemplates';", "import { emailTemplates } from './emailTemplates';");

// Add them to lucide-react
const lucideMatch = "import {";
// Wait, I can just replace `Menu, ` with `Menu, PanelLeft, PanelLeftClose, `
content = content.replace("Menu, X,", "Menu, PanelLeft, PanelLeftClose, X,");

fs.writeFileSync('src/App.tsx', content);
console.log('Fixed Imports');
