const https = require('https');
const fs = require('fs');

function fetchPage(page) {
  return new Promise((resolve, reject) => {
    const url = `https://svayambhutech.com/portfolio/page/${page}/`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function run() {
  const projects = [];
  for (let page = 1; page <= 4; page++) {
    try {
      console.log(`Fetching page ${page}...`);
      const html = await fetchPage(page);
      
      // RegEx to find Elementor Loop Grid items or ova-project items
      // Let's find images and links and their titles
      // Look for: href="PROJECT_URL" followed by img src="IMAGE_URL"
      // Also look for titles in <h3 class="elementor-heading-title">...<a href="PROJECT_URL">TITLE</a></h3>
      // We can search for <h3 class="elementor-heading-title"><a>TITLE</a></h3> and trace back the image.
      
      // A generic regex to find project items:
      // In retirar theme, elementor loop item:
      // <a href="LINK"><img src="IMG" ... alt="ALT"></a>
      // and <h3 class="elementor-heading-title"><a href="LINK">TITLE</a></h3>
      
      const imgRegex = /<a[^>]+href="([^"]+)"[^>]*>[\s\S]*?<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"/gi;
      let match;
      while ((match = imgRegex.exec(html)) !== null) {
        const href = match[1];
        const src = match[2];
        const alt = match[3];
        
        // We only want projects, not user avatars or other stuff
        if (src.includes('wp-content/uploads') && !src.includes('Swayambhu') && !src.includes('logo') && !src.includes('avatar')) {
          projects.push({
            page,
            href,
            src,
            alt
          });
        }
      }
    } catch (e) {
      console.log(`Failed to fetch page ${page}:`, e.message);
    }
  }
  
  // Deduplicate by src
  const unique = [];
  const seen = new Set();
  projects.forEach(p => {
    if (!seen.has(p.src)) {
      seen.add(p.src);
      unique.push(p);
    }
  });
  
  console.log("All Unique Projects found:");
  console.log(JSON.stringify(unique, null, 2));
}

run();
