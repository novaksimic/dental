const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Folder sa originalnim slikama
const inputDir = path.join(__dirname, '../public/images');
// Folder za konvertovane WebP slike
const outputDir = path.join(__dirname, '../public/images/webp');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const exts = ['.webp', '.jpeg', '.webp'];

fs.readdirSync(inputDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (exts.includes(ext)) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(ext, '.webp'));

    sharp(inputPath)
      .webp({ quality: 80 }) // kvalitet 0-100
      .toFile(outputPath)
      .then(() => console.log(`✅ Konvertovano: ${file} → ${path.basename(outputPath)}`))
      .catch(err => console.error(err));
  }
});