const fs = require('fs');

const file360 = 'C:\\Users\\giri2\\.gemini\\antigravity\\brain\\56e46469-a397-4f9d-823f-d2a0cc5ff936\\.system_generated\\steps\\360\\content.md';
const file404 = 'C:\\Users\\giri2\\.gemini\\antigravity\\brain\\56e46469-a397-4f9d-823f-d2a0cc5ff936\\.system_generated\\steps\\404\\content.md';

const search = (filePath, name) => {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Find lines containing keywords in a case-insensitive way
  const keywords = [
    'clove', 'incredible', 'everinley', 'isha', 'exhikraftz', 'mittal', 'paradise', 'security', 'mocks', 'drive', 'rd entertainment', 'grey nile'
  ];
  
  keywords.forEach(kw => {
    let index = 0;
    while ((index = content.toLowerCase().indexOf(kw, index)) !== -1) {
      const snippet = content.substring(Math.max(0, index - 200), Math.min(content.length, index + 250));
      console.log(`[${name}] Match for '${kw}':\n${snippet}\n---`);
      index += kw.length;
    }
  });
};

search(file360, 'Home Page');
search(file404, 'Portfolio Page');
