const fs = require('fs');

const filePaged2 = 'C:\\Users\\giri2\\.gemini\\antigravity\\brain\\56e46469-a397-4f9d-823f-d2a0cc5ff936\\.system_generated\\steps\\553\\content.md';
if (!fs.existsSync(filePaged2)) {
  console.log("Paged 2 file does not exist");
  process.exit(1);
}

const content = fs.readFileSync(filePaged2, 'utf8');

const keywords = [
  'clove', 'incredible', 'everinley', 'isha', 'exhikraftz', 'mittal', 'paradise', 'security', 'mocks', 'drive', 'rd entertainment', 'grey nile'
];

keywords.forEach(kw => {
  let index = 0;
  while ((index = content.toLowerCase().indexOf(kw, index)) !== -1) {
    const snippet = content.substring(Math.max(0, index - 200), Math.min(content.length, index + 250));
    console.log(`Match for '${kw}':\n${snippet}\n---`);
    index += kw.length;
  }
});
