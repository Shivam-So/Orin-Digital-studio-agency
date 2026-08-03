const https = require('https');
const http = require('http');
const url = require('url');

const urls = [
  'https://ekaivagroup.com',
  'https://aprealty.in',
  'https://mychalk.in',
  'https://globalacsic2026.in',
  'https://greynile.com',
  'https://rdentertainment.in',
  'https://mocks4u.in',
  'https://driveaccessible.com',
  'https://clovelighting.com',
  'https://incrediblemiles.com',
  'https://everinley.com',
  'https://ishathetasteofindia.com',
  'http://exhikraftz.com', // fallback to http if https fails
  'https://kgmittalcollege.edu.in',
  'https://paradisebiryanitx.com'
];

function checkUrl(targetUrl) {
  return new Promise((resolve) => {
    const parsed = url.parse(targetUrl);
    const lib = parsed.protocol === 'https:' ? https : http;
    const req = lib.request({
      method: 'GET',
      hostname: parsed.hostname,
      path: parsed.path,
      port: parsed.port,
      timeout: 6000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, (res) => {
      resolve({ url: targetUrl, status: res.statusCode, working: res.statusCode >= 200 && res.statusCode < 400 });
    });

    req.on('error', (err) => {
      resolve({ url: targetUrl, status: null, working: false, error: err.message });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({ url: targetUrl, status: null, working: false, error: 'timeout' });
    });

    req.end();
  });
}

async function run() {
  console.log("Checking project URLs...");
  const results = [];
  for (const u of urls) {
    const res = await checkUrl(u);
    results.push(res);
    console.log(`${res.url} -> Working: ${res.working} (Status: ${res.status || 'N/A'}, Error: ${res.error || 'None'})`);
  }
}

run();
