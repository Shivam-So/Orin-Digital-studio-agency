const fs = require('fs');
const path = require('path');

const srcDir = 'd:/Auxa';
const destDir = 'd:/Auxa/Auxa';

// 1. Sync modified files to the nested Auxa directory if it exists
if (fs.existsSync(destDir)) {
  console.log("Syncing modified assets and pages to Auxa/...");
  
  // Create directories if they don't exist
  fs.mkdirSync(path.join(destDir, 'assets/css'), { recursive: true });
  fs.mkdirSync(path.join(destDir, 'assets/js'), { recursive: true });
  
  fs.copyFileSync(path.join(srcDir, 'assets/css/main.css'), path.join(destDir, 'assets/css/main.css'));
  fs.copyFileSync(path.join(srcDir, 'assets/js/main.js'), path.join(destDir, 'assets/js/main.js'));
  fs.copyFileSync(path.join(srcDir, 'project.html'), path.join(destDir, 'project.html'));
  fs.copyFileSync(path.join(srcDir, 'service.html'), path.join(destDir, 'service.html'));
  fs.copyFileSync(path.join(srcDir, 'about.html'), path.join(destDir, 'about.html'));
  fs.copyFileSync(path.join(srcDir, 'index.html'), path.join(destDir, 'index.html'));
}

// Helper to recursively find all HTML files
function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        getHtmlFiles(filePath, fileList);
      }
    } else if (file.endsWith('.html') && file !== 'reference_index.html') {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const allHtmlFiles = getHtmlFiles(srcDir);

// 2. Extract standard components from the master index.html in srcDir
const indexHtml = fs.readFileSync(path.join(srcDir, 'index.html'), 'utf8');

// Extract footer
const footerMatch = indexHtml.match(/<footer[\s\S]*?<\/footer>/i);
if (!footerMatch) {
  console.error("Could not find footer in index.html");
  process.exit(1);
}
const newFooter = footerMatch[0];

// Extract Desktop Nav <ul>
const desktopNavMatch = indexHtml.match(/<nav class="main-menu collapse navbar-collapse">\s*<ul>([\s\S]*?)<\/ul>\s*<\/nav>/i);
if (!desktopNavMatch) {
  console.error("Could not find desktop nav in index.html");
  process.exit(1);
}
const desktopNavInner = desktopNavMatch[1];

// Extract Mobile Nav <ul>
const mobileNavMatch = indexHtml.match(/<nav class="xb-header-nav">\s*<ul class="xb-menu-primary clearfix">([\s\S]*?)<\/ul>\s*<\/nav>/i);
if (!mobileNavMatch) {
  console.error("Could not find mobile nav in index.html");
  process.exit(1);
}
const mobileNavInner = mobileNavMatch[1];

// Helper to strip active classes
const stripActive = (str) => {
  return str.replace(/class="([^"]*)"/g, (match, p1) => {
    let classes = p1.split(/\s+/).filter(c => c && c !== 'active');
    return classes.length > 0 ? `class="${classes.join(' ')}"` : '';
  });
};

const cleanDesktop = stripActive(desktopNavInner);
const cleanMobile = stripActive(mobileNavInner);

// 3. Process each HTML file
allHtmlFiles.forEach(filePath => {
  const filename = path.basename(filePath);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Footer
  content = content.replace(/<footer[\s\S]*?<\/footer>/gi, newFooter);

  // Helper to add active class to matching li
  const addActive = (navString) => {
    let modified = navString;
    // Find li containing the a tag for the current filename
    const linkRegex = new RegExp(`(<li(?:\\s+class="([^"]*)")?[^>]*>)(\\s*<a[^>]*href="${filename}"[^>]*>)`, 'i');
    if (linkRegex.test(modified)) {
      modified = modified.replace(linkRegex, (match, liTag, classes, aTag) => {
        if (classes !== undefined) {
          return liTag.replace(`class="${classes}"`, `class="${classes} active"`) + aTag;
        } else {
          return liTag.replace('<li', '<li class="active"') + aTag;
        }
      });
    }
    return modified;
  };

  let pageDesktopNav = addActive(cleanDesktop);
  let pageMobileNav = addActive(cleanMobile);

  // Highlight parent Service menu if a child is active
  const isService = filename.includes('-design.html') || filename.includes('-development.html') || filename === 'seo.html' || filename === 'performance-marketing.html' || filename === 'aws-cloud-management.html' || filename === 'service.html';
  if (isService && filename !== 'service.html') {
    const serviceLinkRegex = /(<li(?:\s+class="([^"]*)")?[^>]*>)(\s*<a[^>]*href="service\.html"[^>]*>)/i;
    
    pageDesktopNav = pageDesktopNav.replace(serviceLinkRegex, (match, liTag, classes, aTag) => {
      if (classes !== undefined) {
        return liTag.replace(`class="${classes}"`, `class="${classes} active"`) + aTag;
      } else {
        return liTag.replace('<li', '<li class="active"') + aTag;
      }
    });

    pageMobileNav = pageMobileNav.replace(serviceLinkRegex, (match, liTag, classes, aTag) => {
      if (classes !== undefined) {
        return liTag.replace(`class="${classes}"`, `class="${classes} active"`) + aTag;
      } else {
        return liTag.replace('<li', '<li class="active"') + aTag;
      }
    });
  }

  // Replace Desktop Nav in content
  content = content.replace(/(<nav class="main-menu collapse navbar-collapse">\s*<ul>)[\s\S]*?(<\/ul>\s*<\/nav>)/i, `$1${pageDesktopNav}$2`);
  
  // Replace Mobile Nav in content
  content = content.replace(/(<nav class="xb-header-nav">\s*<ul class="xb-menu-primary clearfix">)[\s\S]*?(<\/ul>\s*<\/nav>)/i, `$1${pageMobileNav}$2`);

  fs.writeFileSync(filePath, content);
  console.log(`Updated: ${filePath}`);
});

console.log('Site synchronization and updates completed successfully.');
