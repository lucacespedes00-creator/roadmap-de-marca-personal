import fs from 'fs';

let code = fs.readFileSync('src/App.tsx', 'utf8');

const targetPage = "{ id: 'linkedin_insight_gtm', title: 'Arquitectura GTM', type: 'default_linkedin_insight_gtm', parentId: 'linkedin_insight_parent' }";

if (!code.includes("linkedin_insight_gtm")) {
  code = code.replace(
    "{ id: 'linkedin_insight_summary', title: 'Dominar el Scroll', type: 'default_linkedin_insight_summary', parentId: 'linkedin_insight_parent' },",
    `{ id: 'linkedin_insight_summary', title: 'Dominar el Scroll', type: 'default_linkedin_insight_summary', parentId: 'linkedin_insight_parent' },\n  ${targetPage},`
  );
  fs.writeFileSync('src/App.tsx', code);
  console.log("Pages updated");
} else {
  console.log("Already updated");
}
