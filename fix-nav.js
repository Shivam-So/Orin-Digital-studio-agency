const fs = require('fs');
const path = require('path');

const dir = 'd:/Auxa';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix desktop menu: It looks for the end of the Marketing li block, then inserts Portfolio if not present
  const desktopRegex = /(<li[^>]*>\s*<a[^>]*><span>Marketing<\/span><\/a>[\s\S]*?<\/ul>\s*<\/li>)(\s*)(<!--\s*<li>\s*<a href="blog\.html"><span>Blog<\/span><\/a>\s*<\/li>\s*-->|\s*<li[^>]*>\s*<a href="contact\.html"><span>Contact<\/span><\/a>\s*<\/li>)/g;
  
  content = content.replace(desktopRegex, (match, p1, p2, p3) => {
    if (match.includes('<span>Portfolio</span>')) return match;
    return `${p1}\n                    <li>\n                      <a href="project.html"><span>Portfolio</span></a>\n                    </li>${p2}${p3}`;
  });

  // Fix mobile menu: It looks for the end of the Marketing li block in the mobile menu context
  const mobileRegex = /(<li[^>]*>\s*<a[^>]*><span>Marketing<\/span><\/a>[\s\S]*?<\/ul>\s*<\/li>)(\s*)(<!--\s*<li[^>]*>\s*<a href="blog\.html"><span>Blog<\/span><\/a>\s*<\/li>\s*-->|\s*<li[^>]*>\s*<a href="contact\.html"><span>Contact<\/span><\/a>\s*<\/li>)/g;
  
  content = content.replace(mobileRegex, (match, p1, p2, p3) => {
    // If we already added it in the desktop replace, we need to be careful, but we just check if Portfolio is in this match context
    if (match.includes('<span>Portfolio</span>')) return match;
    return `${p1}\n                          <li class="menu-item">\n                            <a href="project.html"><span>Portfolio</span></a>\n                          </li>${p2}${p3}`;
  });

  fs.writeFileSync(filePath, content);
});
console.log('Done fixing navigation.');
