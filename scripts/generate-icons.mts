// One-off/regenerable script: derives all raster icon & OG-image PNGs from the
// source SVGs (logo.svg -> favicons/app icons, profile.svg -> social share image).
// Run manually with `tsx scripts/generate-icons.mts` whenever logo.svg or
// profile.svg change.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const publicDir = join(process.cwd(), "public");
const logoSvg = readFileSync(join(publicDir, "logo.svg"));
const profileSvg = readFileSync(join(publicDir, "profile.svg"));

async function generate() {
  // Favicons / app icons from logo.svg (square, white background)
  await Promise.all([
    sharp(logoSvg, { density: 384 })
      .resize(16, 16)
      .png()
      .toFile(join(publicDir, "favicon-16x16.png")),
    sharp(logoSvg, { density: 384 })
      .resize(32, 32)
      .png()
      .toFile(join(publicDir, "favicon-32x32.png")),
    sharp(logoSvg, { density: 384 })
      .resize(180, 180)
      .png()
      .toFile(join(publicDir, "apple-touch-icon.png")),
    sharp(logoSvg, { density: 384 })
      .resize(192, 192)
      .png()
      .toFile(join(publicDir, "pwa-192x192.png")),
    sharp(logoSvg, { density: 384 })
      .resize(512, 512)
      .png()
      .toFile(join(publicDir, "pwa-512x512.png")),
  ]);

  // Social share (OG/Twitter) image from profile.svg, cropped to 1200x630
  await sharp(profileSvg, { density: 384 })
    .resize(1200, 630, { fit: "cover", position: "top" })
    .png()
    .toFile(join(publicDir, "profile-og.png"));

  console.log(
    "✓ Generated favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png, pwa-192x192.png, pwa-512x512.png, profile-og.png",
  );
}

generate();
