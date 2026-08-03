const fs = require('fs');
const contentPath = 'C:\\Users\\giri2\\.gemini\\antigravity\\brain\\56e46469-a397-4f9d-823f-d2a0cc5ff936\\.system_generated\\steps\\360\\content.md';
const html = fs.readFileSync(contentPath, 'utf8');

// Find all links in the document that might be related to projects
const linkRegex = /<a\s+[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
let match;
const links = [];
while ((match = linkRegex.exec(html)) !== null) {
  const href = match[1];
  const text = match[2].replace(/<[^>]*>/g, '').trim();
  if (href.includes('project') || href.includes('portfolio') || text.length > 2) {
    links.push({ href, text });
  }
}

console.log("Unique links containing project/portfolio or with text:", links.filter(l => l.href.includes('project') || l.href.includes('portfolio') || l.href.includes('svayambhutech.com/')));
