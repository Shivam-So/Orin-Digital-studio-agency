const fs = require('fs');
const path = require('path');

const projectPath = 'd:/Auxa/project.html';
let html = fs.readFileSync(projectPath, 'utf8');

// 1. Replace the col-lg-7 block
const menuStart = html.indexOf('<div class="col-lg-7">');
const menuEnd = html.indexOf('</div>', menuStart) + 6; // find the outer div closure
const contentBeforeMenu = html.substring(0, menuStart);
const contentAfterMenu = html.substring(menuEnd);

// Let's replace the block from <div class="col-lg-7"> to </div> with the portfolio menu
const filterMenu = `              <div class="col-lg-7">
                <div class="portfolio-menu mb-65 text-lg-end">
                  <button class="active" data-filter="*">SEE ALL</button>
                  <button data-filter=".cat1" class="">Website</button>
                  <button data-filter=".cat2">Branding</button>
                  <button data-filter=".cat3">landing</button>
                  <button data-filter=".cat4">App</button>
                </div>
              </div>`;

html = contentBeforeMenu + filterMenu + contentAfterMenu;

// 2. Replace the grid items block
const gridStart = html.indexOf('<div class="row grid g-150 mt-none-60">');
const gridEnd = html.indexOf('</div>\n          </div>\n        </div>\n        <!-- portfolio end -->');

const contentBeforeGrid = html.substring(0, gridStart);
const contentAfterGrid = html.substring(gridEnd);

const gridItems = `            <div class="row grid g-150 mt-none-60">
              <!-- Project 1 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat2">
                <div class="portfolio-item xb-img-reveal-item mt-60" data-cat="Website" data-title="Ekaiva Group" data-fx="1">
                  <div class="xbImage__hover">
                    <a href="https://ekaivagroup.com/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/ekaivagroup.png" alt="Ekaiva Group website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 2 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat3">
                <div class="portfolio-item xb-img-reveal-item mt-60" data-cat="Website" data-title="AP Realty" data-fx="1">
                  <div class="xbImage__hover">
                    <a href="https://aprealty.in/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/aprealty.png" alt="AP Realty website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 3 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat2">
                <div class="portfolio-item xb-img-reveal-item mt-60" data-cat="Education" data-title="CHALK Montessori" data-fx="1">
                  <div class="xbImage__hover">
                    <a href="https://mychalk.in/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-26.png" alt="CHALK Montessori website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 4 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat4">
                <div class="portfolio-item xb-img-reveal-item mt-60" data-cat="Event" data-title="Global Symposium Conference" data-fx="1">
                  <div class="xbImage__hover">
                    <a href="https://globalacsic2026.in/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-25.png" alt="Global Symposium Conference website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 5 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat2">
                <div class="portfolio-item xb-img-reveal-item mt-60" data-cat="Website" data-title="Grey Nile" data-fx="1">
                  <div class="xbImage__hover">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-24.png" alt="Grey Nile website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 6 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat4">
                <div class="portfolio-item xb-img-reveal-item mt-60" data-cat="App" data-title="rdentertainment" data-fx="1">
                  <div class="xbImage__hover">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-23.png" alt="rdentertainment website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 7 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat3">
                <div class="portfolio-item xb-img-reveal-item mt-60" data-cat="Website" data-title="Finance Portal" data-fx="1">
                  <div class="xbImage__hover">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/finance.png" alt="Finance website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 8 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat4">
                <div class="portfolio-item xb-img-reveal-item mt-60" data-cat="App" data-title="Web App Development" data-fx="1">
                  <div class="xbImage__hover">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/5.png" alt="Custom Web App Development" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 9 -->
              <div class="col-lg-6 col-md-6 grid-item cat1">
                <div class="portfolio-item xb-img-reveal-item mt-60" data-cat="Backend" data-title="Backend API Solutions" data-fx="1">
                  <div class="xbImage__hover">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/3.png" alt="Node.js Backend Solutions" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 10 -->
              <div class="col-lg-6 col-md-6 grid-item cat2">
                <div class="portfolio-item xb-img-reveal-item mt-60" data-cat="Branding" data-title="UI/UX Experience Design" data-fx="1">
                  <div class="xbImage__hover">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/1.png" alt="UI/UX Design Strategy" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 11 -->
              <div class="col-lg-6 col-md-6 grid-item cat3">
                <div class="portfolio-item xb-img-reveal-item mt-60" data-cat="Marketing" data-title="Digital Growth Strategy" data-fx="1">
                  <div class="xbImage__hover">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/1a.png" alt="Digital Marketing & Growth Strategy" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 12 -->
              <div class="col-lg-6 col-md-6 grid-item cat2">
                <div class="portfolio-item xb-img-reveal-item mt-60" data-cat="Branding" data-title="Creative & Brand Identity" data-fx="1">
                  <div class="xbImage__hover">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/2.png" alt="Branding & Creative Design Services" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 13 -->
              <div class="col-lg-6 col-md-6 grid-item cat1">
                <div class="portfolio-item xb-img-reveal-item mt-60" data-cat="Website" data-title="Agency Showcase Site" data-fx="1">
                  <div class="xbImage__hover">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/about-agency.png" alt="Agency Showcase" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 14 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat3">
                <div class="portfolio-item xb-img-reveal-item mt-60" data-cat="Website" data-title="Finance Platform v2" data-fx="1">
                  <div class="xbImage__hover">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/finance-1.jpg" alt="Finance platform design" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 15 -->
              <div class="col-lg-6 col-md-6 grid-item cat3">
                <div class="portfolio-item xb-img-reveal-item mt-60" data-cat="Marketing" data-title="SEO Optimization Campaign" data-fx="1">
                  <div class="xbImage__hover">
                    <a href="https://svayambhutech.com/portfolio/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/1-scaled.jpg" alt="SEO optimization project" /></a>
                  </div>
                </div>
              </div>`;

html = contentBeforeGrid + gridItems + contentAfterGrid;

fs.writeFileSync(projectPath, html);
console.log("project.html updated successfully with 15 screenshot projects and 5 filter categories.");
