const fs = require('fs');
const contentPath = 'C:\\Users\\giri2\\.gemini\\antigravity\\brain\\56e46469-a397-4f9d-823f-d2a0cc5ff936\\.system_generated\\steps\\404\\content.md';
const html = fs.readFileSync(contentPath, 'utf8');

// We want to find project titles like Clove Lighting, Incredible Miles, Everinley, Isha, Exhikraftz, KG Mittal, Paradise Briyani, Security Boat.
// Let's write a regex that matches standard ova-project grid items or headings and their images.
// Or we can search for the text and output 400 chars around it.
const keywords = [
  'Clove Lighting',
  'Incredible Miles',
  'Everinley',
  'Isha',
  'Exhikraftz',
  'KG Mittal',
  'Paradise Briyani',
  'Security Boat',
  'Mocks4U',
  'Drive Accessible',
  'RD Entertainment',
  'Grey Nile'
];

keywords.forEach(kw => {
  const index = html.toLowerCase().indexOf(kw.toLowerCase());
  if (index !== -1) {
    const context = html.substring(Math.max(0, index - 500), Math.min(html.length, index + 500));
    console.log(`=== Matches for: ${kw} ===`);
    // Find all images within this context
    const imgRegex = /src="([^"]+)"/gi;
    let imgMatch;
    const images = [];
    while ((imgMatch = imgRegex.exec(context)) !== null) {
      images.push(imgMatch[1]);
    }
    console.log("Images:", images);
    
    // Find links
    const linkRegex = /href="([^"]+)"/gi;
    let linkMatch;
    const links = [];
    while ((linkMatch = linkRegex.exec(context)) !== null) {
      links.push(linkMatch[1]);
    }
    console.log("Links:", links);
  } else {
    console.log(`=== Not found: ${kw} ===`);
  }
});
