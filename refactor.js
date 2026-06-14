const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
  // Backgrounds
  { from: /bg-white dark:bg-zinc-900/g, to: 'bg-zinc-900' },
  { from: /bg-white\/60 dark:bg-zinc-900\/60/g, to: 'bg-zinc-900/60' },
  { from: /bg-white\/80 dark:bg-zinc-900\/80/g, to: 'bg-zinc-900/80' },
  { from: /bg-white\/90 dark:bg-zinc-900\/90/g, to: 'bg-zinc-900/90' },
  { from: /bg-zinc-50 dark:bg-zinc-950\/50/g, to: 'bg-zinc-950/50' },
  { from: /bg-zinc-50 dark:bg-zinc-950/g, to: 'bg-zinc-950' },
  { from: /bg-zinc-100 dark:bg-zinc-950/g, to: 'bg-zinc-950' },
  { from: /bg-white dark:bg-zinc-950\/70/g, to: 'bg-zinc-950/70' }, // Nav.tsx
  { from: /bg-white\/70 dark:bg-zinc-950\/70/g, to: 'bg-zinc-950/70' },
  { from: /bg-white dark:bg-zinc-950/g, to: 'bg-zinc-950' },
  
  // Borders
  { from: /border-zinc-200 dark:border-zinc-800\/80/g, to: 'border-zinc-800/80' },
  { from: /border-zinc-200 dark:border-zinc-800\/50/g, to: 'border-zinc-800/50' },
  { from: /border-zinc-200 dark:border-zinc-800/g, to: 'border-zinc-800' },
  { from: /border-zinc-100 dark:border-zinc-800/g, to: 'border-zinc-800' },
  { from: /border-zinc-200 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-600/g, to: 'border-zinc-800 hover:border-zinc-600' },

  // Texts
  { from: /text-zinc-900 dark:text-zinc-50/g, to: 'text-zinc-50' },
  { from: /text-zinc-800 dark:text-zinc-200/g, to: 'text-zinc-200' },
  { from: /text-zinc-700 dark:text-zinc-300/g, to: 'text-zinc-300' },
  { from: /text-zinc-600 dark:text-zinc-400/g, to: 'text-zinc-400' },
  { from: /text-zinc-600 dark:text-zinc-300/g, to: 'text-zinc-300' },
  { from: /text-zinc-500 dark:text-zinc-400/g, to: 'text-zinc-400' },
  { from: /hover:text-zinc-900 dark:hover:text-zinc-100/g, to: 'hover:text-zinc-100' },
  
  // Specific fixes
  { from: /text-zinc-400 hover:text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100/g, to: 'text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800' },
  { from: /from-emerald-50 via-zinc-50 dark:via-zinc-900 to-zinc-100 dark:to-zinc-800/g, to: 'from-emerald-900/20 via-zinc-900 to-zinc-800' },
  { from: /bg-emerald-100 text-emerald-700/g, to: 'bg-emerald-500/10 text-emerald-400' },
  { from: /bg-zinc-100 text-zinc-700/g, to: 'bg-zinc-800 text-zinc-300' },
  { from: /bg-emerald-50/g, to: 'bg-emerald-500/5' },
  { from: /bg-emerald-100/g, to: 'bg-emerald-500/20' },
  { from: /border-emerald-100/g, to: 'border-emerald-500/20' },
  { from: /text-emerald-700/g, to: 'text-emerald-400' },
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let newContent = content;
      
      for (const rule of replacements) {
        newContent = newContent.replace(rule.from, rule.to);
      }

      // specific fixes for projects page where dark: wasn't applied
      if (fullPath.endsWith('projects\\\\page.tsx') || fullPath.endsWith('projects/page.tsx')) {
        newContent = newContent.replace(/text-zinc-900/g, 'text-zinc-50');
        newContent = newContent.replace(/text-zinc-500/g, 'text-zinc-400');
        newContent = newContent.replace(/text-zinc-400 hover:text-zinc-700/g, 'text-zinc-400 hover:text-zinc-100');
      }

      // specific fixes for project detail page
      if (fullPath.endsWith('[id]\\\\page.tsx') || fullPath.endsWith('[id]/page.tsx')) {
        newContent = newContent.replace(/bg-white dark:bg-zinc-950/g, 'bg-zinc-950');
        newContent = newContent.replace(/text-zinc-500 hover:text-rose-500/g, 'text-zinc-400 hover:text-rose-400');
      }
      
      // Cleanup any remaining dark: classes
      newContent = newContent.replace(/dark:([a-zA-Z0-9\-\/]+)/g, '$1');

      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(srcDir);
