const fs = require('fs');
const contentPath = 'C:\\Users\\giri2\\.gemini\\antigravity\\brain\\56e46469-a397-4f9d-823f-d2a0cc5ff936\\.system_generated\\steps\\404\\content.md';
const html = fs.readFileSync(contentPath, 'utf8');

// The portfolio page has elements. Let's dump all blocks that contain 'wp-content/uploads' and look at their HTML structure.
const regex = /<div class="elementor-widget-container">[\s\S]*?<img[\s\S]*?<\/div>/gi;
let match;
while ((match = regex.exec(html)) !== null) {
  const block = match[0];
  if (block.includes('wp-content/uploads')) {
    console.log("--- Post Block ---");
    console.log(block);
  }
}
