const fs = require('fs');
const path = require('path');

const contentPath = 'C:\\Users\\giri2\\.gemini\\antigravity\\brain\\56e46469-a397-4f9d-823f-d2a0cc5ff936\\.system_generated\\steps\\360\\content.md';
if (!fs.existsSync(contentPath)) {
  console.log("File does not exist");
  process.exit(1);
}

const html = fs.readFileSync(contentPath, 'utf8');

// Find all image URLs and links around them to understand the projects
// Usually projects are represented by images (screenshots of websites) or portfolio items.
// Let's search for img tags and their sources or links containing /portfolio/ or project URLs.
const matches = [];
const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/gi;
let match;
while ((match = imgRegex.exec(html)) !== null) {
  const src = match[1];
  if (src.includes('wp-content/uploads') && !src.includes('logo') && !src.includes('icon') && !src.includes('avatar')) {
    matches.push(src);
  }
}

console.log("Image matches (uploads):", [...new Set(matches)]);
