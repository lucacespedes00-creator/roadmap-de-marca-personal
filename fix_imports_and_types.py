import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# Fix types
type_marker = "export type Page = {"
type_idx = content.find(type_marker)
if type_idx != -1:
    type_line_marker = "  type: 'default_plan' | 'default_etapa' | 'default_contenido' | 'default_linkedin_parent' | 'default_linkedin_angulos' | 'default_linkedin_ideas' | 'default_linkedin_content' | 'default_linkedin_acquisition_parent' | 'default_linkedin_vistas' | 'default_linkedin_outbound' | 'default_linkedin_insight_parent' | 'default_linkedin_insight_summary' | 'custom';"
    type_line_idx = content.find(type_line_marker, type_idx)
    if type_line_idx != -1:
        new_type_line = "  type: 'default_plan' | 'default_etapa' | 'default_contenido' | 'default_linkedin_parent' | 'default_linkedin_angulos' | 'default_linkedin_ideas' | 'default_linkedin_content' | 'default_linkedin_acquisition_parent' | 'default_linkedin_vistas' | 'default_linkedin_outbound' | 'default_linkedin_insight_parent' | 'default_linkedin_insight_summary' | 'default_linkedin_email' | 'custom';"
        content = content[:type_line_idx] + new_type_line + content[type_line_idx + len(type_line_marker):]

# Fix imports
import_marker = "import { "
import_idx = content.find(import_marker)
if import_idx != -1:
    import_end_idx = content.find(" } from 'lucide-react';", import_idx)
    if import_end_idx != -1:
        current_imports = content[import_idx + len(import_marker):import_end_idx]
        new_imports = current_imports + ", MonitorPlay, CalendarDays, RefreshCcw"
        content = content[:import_idx + len(import_marker)] + new_imports + content[import_end_idx:]

with open('src/App.tsx', 'w') as f:
    f.write(content)

