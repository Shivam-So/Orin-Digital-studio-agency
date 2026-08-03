const fs = require('fs');
const path = require('path');

const dir = 'd:/Auxa';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

// 1. Get the source index.html
const indexHtml = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');

// Extract footer
const footerMatch = indexHtml.match(/<footer[\s\S]*?<\/footer>/i);
if (!footerMatch) {
  console.error("Could not find footer in index.html");
  process.exit(1);
}
const newFooter = footerMatch[0];

// Extract Desktop Nav <ul>
const desktopNavMatch = indexHtml.match(/<nav class="main-menu collapse navbar-collapse">\s*<ul>([\s\S]*?)<\/ul>\s*<\/nav>/i);
const desktopNavInner = desktopNavMatch ? desktopNavMatch[1] : '';

// Extract Mobile Nav <ul>
const mobileNavMatch = indexHtml.match(/<nav class="xb-header-nav">\s*<ul class="xb-menu-primary clearfix">([\s\S]*?)<\/ul>\s*<\/nav>/i);
const mobileNavInner = mobileNavMatch ? mobileNavMatch[1] : '';

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Footer
  content = content.replace(/<footer[\s\S]*?<\/footer>/gi, newFooter);

  // Helper to remove active classes
  const stripActive = (str) => {
    return str.replace(/class="([^"]*)"/g, (match, p1) => {
      let classes = p1.split(/\s+/).filter(c => c && c !== 'active');
      return classes.length > 0 ? `class="${classes.join(' ')}"` : '';
    });
  };

  let cleanDesktop = stripActive(desktopNavInner);
  let cleanMobile = stripActive(mobileNavInner);

  // Helper to add active class to matching li
  const addActive = (navString) => {
    let modified = navString;
    // find li containing the a tag to the current file
    const linkRegex = new RegExp(`(<li(?:\\s+class="([^"]*)")?[^>]*>)(\\s*<a[^>]*href="${file}"[^>]*>)`, 'i');
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

  // We also need to highlight parent menus (e.g. Services) if a child is active
  const isService = file.includes('-design.html') || file.includes('-development.html') || file === 'seo.html' || file === 'performance-marketing.html' || file === 'aws-cloud-management.html' || file === 'service.html';
  if (isService && file !== 'service.html') {
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
});

console.log('Update complete.');
