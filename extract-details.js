const fs = require('fs');
const contentPath = 'C:\\Users\\giri2\\.gemini\\antigravity\\brain\\56e46469-a397-4f9d-823f-d2a0cc5ff936\\.system_generated\\steps\\360\\content.md';
const html = fs.readFileSync(contentPath, 'utf8');

// Let's search for some text patterns or structure.
// Let's find matches for images inside anchor tags (which represent links to projects).
const projectRegex = /<a\s+[^>]*href="([^"]+)"[^>]*>[\s\S]*?<img\s+[^>]*src="([^"]+)"[^>]*>[\s\S]*?<\/a>/gi;
const projects = [];

// Also, let's search for Elementor portfolio layouts.
// Often there is a title near the image.
// Let's write a script to search for text blocks of 500 chars surrounding each unique project image
const uniqueImages = [
  'ekaivagroup.png',
  'aprealty.png',
  'Group-26.png',
  'Group-25.png',
  'Group-24.png',
  'Group-23.png',
  'finance.png',
  '5.png',
  '3.png',
  '1.png',
  '1a.png',
  '2.png',
  '360-bright-media.png',
  'arihant.png',
  'artirnce.png',
  'biohackn.png',
  'cognizant.png',
  'drive.png',
  'everinley.png',
  'incredible-miles.png',
  'mahindra.png',
  'material-buy.png',
  'mocks-4-u.png',
  'pixel-ai.png',
  'ruchoks.png',
  'sbi.png',
  'shiva.png'
];

uniqueImages.forEach(img => {
  const index = html.indexOf(img);
  if (index !== -1) {
    const context = html.substring(Math.max(0, index - 300), Math.min(html.length, index + 300));
    console.log(`--- Context for ${img} ---`);
    console.log(context);
    console.log("\n");
  }
});
