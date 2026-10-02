import fs from 'fs';

let content = fs.readFileSync('src/TesisOutboundMdrSdrPage.tsx', 'utf-8');

// First, remove existing section ids to avoid duplicates
content = content.replace(/<section id="[^"]+"/g, '<section');
// Remove existing TableOfContents to replace it later
content = content.replace(/<TableOfContents sections=\{\[[^]*?\]\} \/>/g, 'TOC_PLACEHOLDER');


let tocSections = [];
let sectionCounter = 0;

// We need to carefully replace <section> with <section id="...">
// Since we want to map them to the h3 inside, let's use a regex with a replacement function that matches <section>...<h3>...</h3>

const sectionsMatches = [];
let newContent = content;

let splitBySection = content.split('<section');
let finalContent = splitBySection[0];

for (let i = 1; i < splitBySection.length; i++) {
  let sectionContent = splitBySection[i];
  
  // Find the first h3
  let h3Match = sectionContent.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
  if (h3Match) {
    let rawText = h3Match[1];
    // Strip inner tags like <TrendingUp ... /> or <div>
    let cleanText = rawText.replace(/<[^>]+>/g, '').trim();
    // Collapse whitespace
    cleanText = cleanText.replace(/\s+/g, ' ');
    
    // Shorten if too long
    if (cleanText.length > 50) {
      cleanText = cleanText.substring(0, 47) + '...';
    }
    
    // If cleanText is empty (maybe h3 had nested elements we stripped too aggressively? No, only tags)
    if (cleanText) {
      let sectionId = `section-${sectionCounter++}`;
      tocSections.push({ id: sectionId, title: cleanText });
      
      // Add id to this section
      // sectionContent starts right after '<section'
      // It might be ' className="..."' or '>'
      finalContent += `<section id="${sectionId}"` + sectionContent;
    } else {
      finalContent += '<section' + sectionContent;
    }
  } else {
    finalContent += '<section' + sectionContent;
  }
}

// Replace TOC_PLACEHOLDER
const tocComponentCall = `<TableOfContents sections={${JSON.stringify(tocSections)}} />`;
finalContent = finalContent.replace('TOC_PLACEHOLDER', tocComponentCall);

fs.writeFileSync('src/TesisOutboundMdrSdrPage.tsx', finalContent);
console.log('Found sections: ', tocSections);
