const fs = require('fs');
const path = require('path');

// 1. Update project.html
const projectPath = 'd:/Auxa/project.html';
let html = fs.readFileSync(projectPath, 'utf8');

// Find the block starting from <div class="portfolio pt-135 pb-150"> up to the grid end
const startTag = '<div class="portfolio pt-135 pb-150">';
const startIdx = html.indexOf(startTag);

const endTag = '<!-- portfolio end -->';
const endIdx = html.indexOf(endTag);

if (startIdx === -1 || endIdx === -1) {
  console.error("Could not find portfolio bounds in project.html");
  process.exit(1);
}

const contentBefore = html.substring(0, startIdx);
const contentAfter = html.substring(endIdx);

const newPortfolioBlock = `<div class="portfolio pt-135 pb-150">
          <div class="container">
            <div class="row align-items-end mb-20">
              <div class="col-lg-12">
                <div class="portfolio-menu mb-65 text-center">
                  <button class="active" data-filter="*">SEE ALL</button>
                  <button data-filter=".cat1" class="">Website</button>
                  <button data-filter=".cat2">Branding</button>
                  <button data-filter=".cat3">landing</button>
                  <button data-filter=".cat4">App</button>
                </div>
              </div>
            </div>
            <div class="row grid cols-5 mt-none-20">
              <!-- Project 1 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat2">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Website" data-title="Ekaiva Group" data-fx="1">
                  <div class="xbImage__hover image-1">
                    <a href="https://ekaivagroup.com/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/ekaivagroup.png" alt="Ekaiva Group website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 2 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat3">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Website" data-title="AP Realty" data-fx="1">
                  <div class="xbImage__hover image-2">
                    <a href="https://aprealty.in/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/aprealty.png" alt="AP Realty website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 3 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat2">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Education" data-title="CHALK Montessori" data-fx="1">
                  <div class="xbImage__hover image-3">
                    <a href="https://mychalk.in/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-26.png" alt="CHALK Montessori website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 4 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat4">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Event" data-title="Global Symposium Conference" data-fx="1">
                  <div class="xbImage__hover image-4">
                    <a href="https://globalacsic2026.in/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-25.png" alt="Global Symposium Conference website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 5 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat2">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Website" data-title="Grey Nile" data-fx="1">
                  <div class="xbImage__hover image-5">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-24.png" alt="Grey Nile website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 6 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat4">
                <div class="portfolio-item xb-img-reveal-item" data-cat="App" data-title="rdentertainment" data-fx="1">
                  <div class="xbImage__hover image-6">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-23.png" alt="rdentertainment website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 7 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat3">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Website" data-title="Mocks4U" data-fx="1">
                  <div class="xbImage__hover image-7">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-22-1.png" alt="Mocks4U website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 8 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat4">
                <div class="portfolio-item xb-img-reveal-item" data-cat="App" data-title="Drive Accessible" data-fx="1">
                  <div class="xbImage__hover image-8">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-21-2.png" alt="Drive Accessible website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 9 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat3">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Website" data-title="Clove Lighting" data-fx="1">
                  <div class="xbImage__hover image-9">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-17-1.png" alt="Clove Lighting website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 10 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat3">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Website" data-title="Incredible Miles" data-fx="1">
                  <div class="xbImage__hover image-10">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-18-1.png" alt="Incredible Miles website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 11 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat3">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Website" data-title="Everinley" data-fx="1">
                  <div class="xbImage__hover image-11">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/everyine.png" alt="Everinley website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 12 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat3">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Website" data-title="Isha The Taste of India" data-fx="1">
                  <div class="xbImage__hover image-12">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Isha-website.png" alt="Isha The Taste of India website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 13 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat2">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Website" data-title="Exhikraftz" data-fx="1">
                  <div class="xbImage__hover image-13">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-8.png" alt="Exhikraftz website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 14 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat2">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Website" data-title="KG Mittal School & College" data-fx="1">
                  <div class="xbImage__hover image-14">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-6.png" alt="KG Mittal School & College website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 15 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat3">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Website" data-title="Paradise Biryani" data-fx="1">
                  <div class="xbImage__hover image-15">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-2.png" alt="Paradise Biryani website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 16 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat4">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Website" data-title="Security Boat" data-fx="1">
                  <div class="xbImage__hover image-16">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-1.png" alt="Security Boat website" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;

fs.writeFileSync(projectPath, contentBefore + newPortfolioBlock + contentAfter);
console.log("project.html written successfully.");

// 2. Append custom styling to assets/css/main.css for 5-column grid and margins
const cssPath = 'd:/Auxa/assets/css/main.css';
let css = fs.readFileSync(cssPath, 'utf8');

const customCSS = `
/* ------------------------------------------
= 5 Column Portfolio Grid Overrides
-------------------------------------------*/
@media (min-width: 992px) {
  .cols-5 .grid-item {
    width: 20% !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .cols-5 .grid-item {
    width: 33.333% !important;
  }
}
@media (max-width: 767px) {
  .cols-5 .grid-item {
    width: 50% !important;
  }
}
@media (max-width: 480px) {
  .cols-5 .grid-item {
    width: 100% !important;
  }
}

.cols-5.row {
  margin-left: -15px !important;
  margin-right: -15px !important;
}
.cols-5.row > * {
  padding-left: 15px !important;
  padding-right: 15px !important;
}
.cols-5 .portfolio-item {
  margin-top: 30px !important;
}
`;

// Avoid duplicating the overrides
if (!css.includes('5 Column Portfolio Grid Overrides')) {
  fs.writeFileSync(cssPath, css + customCSS);
  console.log("main.css updated with 5-column overrides.");
} else {
  console.log("main.css already contains overrides.");
}
