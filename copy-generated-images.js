const fs = require('fs');

const srcCloud = 'C:\\Users\\giri2\\.gemini\\antigravity\\brain\\56e46469-a397-4f9d-823f-d2a0cc5ff936\\cloud_devops_1785781902752.jpg';
const srcShopify = 'C:\\Users\\giri2\\.gemini\\antigravity\\brain\\56e46469-a397-4f9d-823f-d2a0cc5ff936\\shopify_development_1785781921246.jpg';

const destCloud = 'd:\\Auxa\\assets\\img\\services-webp\\aws-cloud-management.webp';
const destShopify = 'd:\\Auxa\\assets\\img\\services-webp\\shopify-development.webp';

try {
  fs.copyFileSync(srcCloud, destCloud);
  console.log("Cloud image copied to destCloud successfully.");
  fs.copyFileSync(srcShopify, destShopify);
  console.log("Shopify image copied to destShopify successfully.");
} catch (err) {
  console.error("Error copying images:", err.message);
}
