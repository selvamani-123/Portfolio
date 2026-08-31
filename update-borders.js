const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const filesToUpdate = [
  'about.tsx',
  'skills.tsx',
  'projects.tsx',
  'journey.tsx',
  'achievements.tsx',
  'contact.tsx'
];

filesToUpdate.forEach(file => {
  const filePath = path.join(componentsDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace the default white border with a teal border for the main cards
    content = content.replace(/bg-card border border-white\/10/g, 'bg-card border border-accent/30');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
