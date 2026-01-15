import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const faviconDir = path.join(__dirname, '../public/static/favicons');
const svgPath = path.join(faviconDir, 'clearvue-logo.svg');

// Check if SVG exists
if (!fs.existsSync(svgPath)) {
  console.error('SVG file not found:', svgPath);
  process.exit(1);
}

const sizes = [
  // Standard favicons
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },

  // Android Chrome
  { name: 'android-chrome-36x36.png', size: 36 },
  { name: 'android-chrome-48x48.png', size: 48 },
  { name: 'android-chrome-72x72.png', size: 72 },
  { name: 'android-chrome-96x96.png', size: 96 },
  { name: 'android-chrome-144x144.png', size: 144 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-256x256.png', size: 256 },
  { name: 'android-chrome-384x384.png', size: 384 },
  { name: 'android-chrome-512x512.png', size: 512 },

  // Apple Touch Icons
  { name: 'apple-touch-icon-57x57.png', size: 57 },
  { name: 'apple-touch-icon-60x60.png', size: 60 },
  { name: 'apple-touch-icon-72x72.png', size: 72 },
  { name: 'apple-touch-icon-76x76.png', size: 76 },
  { name: 'apple-touch-icon-114x114.png', size: 114 },
  { name: 'apple-touch-icon-120x120.png', size: 120 },
  { name: 'apple-touch-icon-144x144.png', size: 144 },
  { name: 'apple-touch-icon-152x152.png', size: 152 },
  { name: 'apple-touch-icon-167x167.png', size: 167 },
  { name: 'apple-touch-icon-180x180.png', size: 180 },
  { name: 'apple-touch-icon-1024x1024.png', size: 1024 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'apple-touch-icon-precomposed.png', size: 180 },

  // MS Tiles
  { name: 'mstile-70x70.png', size: 70 },
  { name: 'mstile-144x144.png', size: 144 },
  { name: 'mstile-150x150.png', size: 150 },
  { name: 'mstile-310x310.png', size: 310 },

  // Yandex
  { name: 'yandex-browser-50x50.png', size: 50 },
];

// Special case for mstile-310x150
const specialSizes = [
  { name: 'mstile-310x150.png', width: 310, height: 150 },
];

async function generateFavicons() {
  console.log('Generating favicons from:', svgPath);

  // Generate square favicons
  for (const { name, size } of sizes) {
    try {
      await sharp(svgPath, { density: 300 })
        .resize(size, size)
        .png()
        .toFile(path.join(faviconDir, name));
      console.log(`✓ Generated ${name}`);
    } catch (error) {
      console.error(`✗ Failed to generate ${name}:`, error.message);
    }
  }

  // Generate non-square favicons
  for (const { name, width, height } of specialSizes) {
    try {
      await sharp(svgPath, { density: 300 })
        .resize(width, height, { fit: 'contain', background: { r: 49, g: 130, b: 184, alpha: 1 } })
        .png()
        .toFile(path.join(faviconDir, name));
      console.log(`✓ Generated ${name}`);
    } catch (error) {
      console.error(`✗ Failed to generate ${name}:`, error.message);
    }
  }

  // Generate favicon.ico (multi-size ICO file) using 48x48 as base
  try {
    await sharp(svgPath, { density: 300 })
      .resize(48, 48)
      .toFile(path.join(faviconDir, 'favicon.ico'));
    console.log('✓ Generated favicon.ico');
  } catch (error) {
    console.error('✗ Failed to generate favicon.ico:', error.message);
  }

  console.log('\nFavicon generation complete!');
}

generateFavicons().catch(console.error);
