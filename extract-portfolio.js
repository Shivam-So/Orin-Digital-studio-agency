const fs = require('fs');
const contentPath = 'C:\\Users\\giri2\\.gemini\\antigravity\\brain\\56e46469-a397-4f9d-823f-d2a0cc5ff936\\.system_generated\\steps\\404\\content.md';
const html = fs.readFileSync(contentPath, 'utf8');

// Let's search for Elementor portfolio/project elements or ova-project elements.
// Let's print out snippets that look like project grid items.
const matches = [];
const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/gi;
let match;
while ((match = imgRegex.exec(html)) !== null) {
  const src = match[1];
  if (src.includes('wp-content/uploads')) {
    matches.push(src);
  }
}

// Print some content around the first few images
console.log("Images found on portfolio page:", [...new Set(matches)]);

const index = html.indexOf('ekaivagroup');
if (index !== -1) {
  console.log("Snippet for ekaivagroup:\n", html.substring(index - 200, index + 400));
}
