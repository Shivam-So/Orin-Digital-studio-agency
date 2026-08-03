const fs = require('fs');
const contentPath = 'C:\\Users\\giri2\\.gemini\\antigravity\\brain\\56e46469-a397-4f9d-823f-d2a0cc5ff936\\.system_generated\\steps\\360\\content.md';
const html = fs.readFileSync(contentPath, 'utf8');

// Find all elements that look like Elementor projects or posts
// Let's look for img tags that are part of the portfolio
const regex = /<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"/gi;
let match;
const screenshots = [];
while ((match = regex.exec(html)) !== null) {
  const src = match[1];
  const alt = match[2];
  if (src.includes('wp-content/uploads') && 
      (src.includes('Group') || src.includes('ekaiva') || src.includes('aprealty') || src.includes('finance') || 
       /wp-content\/uploads\/\d+\.png/.test(src) || src.includes('1a.png') || src.includes('about-agency') || src.includes('1-scaled'))) {
    screenshots.push({ src, alt });
  }
}

console.log("Real projects (screenshots):", screenshots);
