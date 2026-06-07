import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = path.join(process.cwd(), 'public/images');
const outputDir = path.join(process.cwd(), 'public/images/webp');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const exts = ['.jpg', '.jpeg', '.png'];

fs.readdirSync(inputDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();

  if (exts.includes(ext)) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(
      outputDir,
      file.replace(ext, '.webp')
    );

    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() =>
        console.log(`✅ Konvertovano: ${file} → ${path.basename(outputPath)}`)
      )
      .catch(err => console.error('❌ Error:', err));
  }
});