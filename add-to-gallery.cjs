const fs = require('fs');
const path = require('path');
const readline = require('readline/promises');

// Configuration
const GALLERY_JSON_PATH = './public/assets/pixel-art/gallery.json';
const DEST_DIR = './public/assets/pixel-art/images';
const DEFAULT_PROGRAM = 'Aseprite';

// Helper to turn filenames like "common_goldeneye.png" into "Common Goldeneye"
function suggestTitle(filename) {
  const nameWithoutExt = path.parse(filename).name;
  return nameWithoutExt
    .split(/[_-]/) // Split by underscore or hyphen
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

async function run() {
  const sourceFolder = process.argv[2];
  if (!sourceFolder) {
    console.error("Usage: ls *.png | node add-to-gallery.js <source_directory_path>");
    process.exit(1);
  }

  if (!fs.existsSync(GALLERY_JSON_PATH)) {
    console.error("gallery.json not found!");
    process.exit(1);
  }

  const rawInput = fs.readFileSync(0, 'utf-8');
  const filenames = rawInput.split(/\s+/).filter(Boolean);

  if (filenames.length === 0) {
    console.log("No filenames provided via stdin.");
    process.exit(0);
  }

  const rl = readline.createInterface({
    input: fs.createReadStream('/dev/tty'),
    output: process.stdout
  });

  let gallery = JSON.parse(fs.readFileSync(GALLERY_JSON_PATH, 'utf-8'));
  
  for (const filename of filenames) {
    const fullSourcePath = path.join(sourceFolder, filename);
    const destPath = path.join(DEST_DIR, filename);

    if (fs.existsSync(destPath)) {
      console.log(`- Skipping ${filename} (already exists in destination)`);
      continue;
    }

    if (!fs.existsSync(fullSourcePath)) {
      console.log(`- Skipping ${filename} (source file not found)`);
      continue;
    }

    console.log(`\n--- Metadata for ${filename} ---`);

    // 1. Title with Suggestion
    const suggestion = suggestTitle(filename);
    const titleInput = await rl.question(`Title [Default: ${suggestion}]: `);
    const title = titleInput.trim() || suggestion;

    // 2. Date Logic
    const asepritePath = fullSourcePath.replace(/\.[^/.]+$/, ".aseprite");
    let stats = fs.existsSync(asepritePath) ? fs.statSync(asepritePath) : fs.statSync(fullSourcePath);
    const dateStr = stats.mtime.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    // 3. Category Selection
    const categories = [...new Set(gallery.map(item => item.category))].sort();
    console.log(`Select category:`);
    categories.forEach((cat, index) => console.log(`  ${index + 1}. ${cat}`));
    console.log(`  0. [Create New]`);

    let category = "";
    const choice = await rl.question(`Choice: `);
    if (choice === "0" || !categories[parseInt(choice) - 1]) {
      category = await rl.question(`New category name: `);
    } else {
      category = categories[parseInt(choice) - 1];
    }

    // 4. Featured Toggle
    const featuredInput = await rl.question(`Featured? (y/N): `);
    const isFeatured = featuredInput.toLowerCase() === 'y';

    // 5. Comments
    const comments = await rl.question(`Comments: `);

    const newItem = {
      title,
      filename: filename,
      date: dateStr,
      program: DEFAULT_PROGRAM,
      comments,
      featured: isFeatured,
      category
    };

    try {
      fs.copyFileSync(fullSourcePath, destPath);
      gallery.push(newItem);
      fs.writeFileSync(GALLERY_JSON_PATH, JSON.stringify(gallery, null, 2));
      console.log(`✅ Success: Added ${filename}`);
    } catch (err) {
      console.error(`❌ Error:`, err.message);
    }
  }

  rl.close();
  process.exit(0);
}

run();