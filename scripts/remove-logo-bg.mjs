import sharp from "sharp";
import path from "path";

const inputPath = path.resolve("public/images/logo/oil-logo-icon.jpg");
const outputPath = path.resolve("public/images/logo/oil-logo-transparent.png");

async function removeBg() {
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const rgbaBuffer = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = data[i * channels];
    const g = data[i * channels + 1];
    const b = data[i * channels + 2];

    // If pixel is close to white/light grey, make it transparent
    const isWhitish = r > 220 && g > 220 && b > 220;

    rgbaBuffer[i * 4] = r;
    rgbaBuffer[i * 4 + 1] = g;
    rgbaBuffer[i * 4 + 2] = b;
    rgbaBuffer[i * 4 + 3] = isWhitish ? 0 : 255;
  }

  await sharp(rgbaBuffer, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(outputPath);

  console.log(`Saved transparent logo to ${outputPath} (${width}x${height})`);
}

removeBg().catch(console.error);
