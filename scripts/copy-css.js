const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');
const distDir = path.join(__dirname, '../dist');

function copyAllCssFiles(srcRoot, distRoot) {
  if (!fs.existsSync(srcRoot)) return;
  const entries = fs.readdirSync(srcRoot, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcRoot, entry.name);
    const distPath = path.join(distRoot, entry.name);
    if (entry.isDirectory()) {
      copyAllCssFiles(srcPath, distPath);
    } else if (entry.isFile() && entry.name.endsWith('.css')) {
      if (!fs.existsSync(distRoot)) fs.mkdirSync(distRoot, { recursive: true });
      fs.copyFileSync(srcPath, distPath);
      console.log(`Copied: ${srcPath} -> ${distPath}`);
    }
  }
}

copyAllCssFiles(srcDir, distDir);
