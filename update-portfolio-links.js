const fs = require('fs');

const projectPath = 'd:/Auxa/project.html';
let html = fs.readFileSync(projectPath, 'utf8');

// We will replace the portfolio items section in project.html with the correct working hyperlinks.
// Let's replace the whole grid to make it clean and avoid index matching errors.
const startTag = '<div class="row grid cols-5 mt-none-20">';
const startIdx = html.indexOf(startTag);

const endTag = '</div>\n          </div>\n        </div>\n        <!-- portfolio end -->';
const endIdx = html.indexOf(endTag);

if (startIdx === -1 || endIdx === -1) {
  console.error("Could not find portfolio bounds");
  process.exit(1);
}

const contentBefore = html.substring(0, startIdx);
const contentAfter = html.substring(endIdx);

const updatedGrid = `<div class="row grid cols-5 mt-none-20">
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
                    <a href="https://greynile.com/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-24.png" alt="Grey Nile website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 6 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat4">
                <div class="portfolio-item xb-img-reveal-item" data-cat="App" data-title="rdentertainment" data-fx="1">
                  <div class="xbImage__hover image-6">
                    <a href="https://rdentertainment.in/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-23.png" alt="rdentertainment website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 7 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat3">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Website" data-title="Mocks4U" data-fx="1">
                  <div class="xbImage__hover image-7">
                    <a href="https://mocks4u.in/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-22-1.png" alt="Mocks4U website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 8 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat4">
                <div class="portfolio-item xb-img-reveal-item" data-cat="App" data-title="Drive Accessible" data-fx="1">
                  <div class="xbImage__hover image-8">
                    <a href="https://driveaccessible.com/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-21-2.png" alt="Drive Accessible website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 9 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat3">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Website" data-title="Clove Lighting" data-fx="1">
                  <div class="xbImage__hover image-9">
                    <a href="https://clovelighting.com/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-17-1.png" alt="Clove Lighting website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 10 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat3">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Website" data-title="Incredible Miles" data-fx="1">
                  <div class="xbImage__hover image-10">
                    <a href="https://incrediblemiles.com/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-18-1.png" alt="Incredible Miles website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 11 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat3">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Website" data-title="Everinley" data-fx="1">
                  <div class="xbImage__hover image-11">
                    <a href="https://everinley.com/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/everyine.png" alt="Everinley website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 12 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat3">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Website" data-title="Isha The Taste of India" data-fx="1">
                  <div class="xbImage__hover image-12">
                    <a href="https://ishathetasteofindia.com/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Isha-website.png" alt="Isha The Taste of India website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 13 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat2">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Website" data-title="Exhikraftz" data-fx="1">
                  <div class="xbImage__hover image-13">
                    <a href="http://exhikraftz.com/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-8.png" alt="Exhikraftz website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 14 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat2">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Website" data-title="KG Mittal School & College" data-fx="1">
                  <div class="xbImage__hover image-14">
                    <a href="https://kgmittalcollege.edu.in/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-6.png" alt="KG Mittal School & College website" /></a>
                  </div>
                </div>
              </div>
              <!-- Project 15 -->
              <div class="col-lg-6 col-md-6 grid-item cat1 cat3">
                <div class="portfolio-item xb-img-reveal-item" data-cat="Website" data-title="Paradise Biryani" data-fx="1">
                  <div class="xbImage__hover image-15">
                    <a href="https://paradisebiryanitx.com/" target="_blank"><img src="https://svayambhutech.com/wp-content/uploads/Group-2.png" alt="Paradise Biryani website" /></a>
                  </div>
                </div>
              </div>`;

fs.writeFileSync(projectPath, contentBefore + updatedGrid + contentAfter);
console.log("Updated links successfully in d:/Auxa/project.html");
