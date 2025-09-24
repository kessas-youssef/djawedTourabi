// convert.js
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

// __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, "src/assets/djawedTourabi");

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  files.forEach((file) => {
    const ext = path.extname(file).toLowerCase();
    const validExts = [".jpg", ".jpeg", ".png"];

    if (!validExts.includes(ext)) return; // skip non-image files

    const baseName = path.basename(file, ext);
    const inputPath = path.join(inputDir, file);

    // Convert to WebP
    sharp(inputPath)
      .toFormat("webp", { quality: 80 })
      .toFile(path.join(inputDir, `${baseName}.webp`))
      .then(() => console.log(`Converted ${file} → ${baseName}.webp`))
      .catch((err) => console.error("WebP error:", err));

    // Convert to AVIF
    sharp(inputPath)
      .toFormat("avif", { quality: 50 })
      .toFile(path.join(inputDir, `${baseName}.avif`))
      .then(() => console.log(`Converted ${file} → ${baseName}.avif`))
      .catch((err) => console.error("AVIF error:", err));
  });
});
