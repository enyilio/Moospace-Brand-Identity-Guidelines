import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const ribbonPath = path.join(root, 'assets/logos/moospace-logo-ribbon.png');

async function blackRibbon() {
  const meta = await sharp(ribbonPath).metadata();
  const alpha = await sharp(ribbonPath).extractChannel('alpha').toBuffer();
  return sharp({
    create: { width: meta.width, height: meta.height, channels: 3, background: { r: 17, g: 17, b: 17 } }
  })
    .joinChannel(alpha)
    .png()
    .toBuffer();
}

async function buildLockup({ W, H, ribbonW, padTop, gap, textGap, fontSize, bgRect, ribbonBuffer, accent, outName }) {
  const ribbonH = Math.round(ribbonW * (418 / 763));
  const ribbonX = Math.round((W - ribbonW) / 2);
  const ribbonY = padTop;
  const lineY = ribbonY + ribbonH + gap;
  const lineW = ribbonW;
  const lineX = Math.round((W - lineW) / 2);
  const textY = lineY + textGap;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#3A4553"/>
        <stop offset="1" stop-color="#141A25"/>
      </linearGradient>
    </defs>
    ${bgRect ? bgRect(W, H) : ''}
    <line x1="${lineX}" y1="${lineY}" x2="${lineX + lineW}" y2="${lineY}"
          stroke="${accent}" stroke-width="3"/>
    <text x="${W / 2}" y="${textY}" text-anchor="middle"
          font-family="Calibri Light, Calibri, Segoe UI Light, sans-serif"
          font-size="${fontSize}" font-weight="300" letter-spacing="4"
          fill="${accent}">Moospace</text>
  </svg>`;

  const ribbon = await sharp(ribbonBuffer).resize(ribbonW, ribbonH).toBuffer();
  const outPath = path.join(root, 'assets/logos', outName);
  await sharp(Buffer.from(svg))
    .composite([{ input: ribbon, left: ribbonX, top: ribbonY }])
    .png()
    .toFile(outPath);
  console.log('Wrote', outPath, `(${W}x${H})`);
}

const blackRibbonBuf = await blackRibbon();

await buildLockup({
  W: 1200, H: 1200,
  ribbonW: 520, padTop: 360, gap: 80, textGap: 180, fontSize: 150,
  bgRect: (w, h) => `<rect width="${w}" height="${h}" fill="url(#bg)"/>`,
  ribbonBuffer: ribbonPath,
  accent: '#F5C843',
  outName: 'moospace-logo-fb.png',
});

await buildLockup({
  W: 1000, H: 750,
  ribbonW: 380, padTop: 160, gap: 40, textGap: 120, fontSize: 120,
  bgRect: (w, h) => `<rect width="${w}" height="${h}" fill="#FFFFFF"/>`,
  ribbonBuffer: blackRibbonBuf,
  accent: '#111111',
  outName: 'moospace-logo-bw.png',
});

await buildLockup({
  W: 1000, H: 750,
  ribbonW: 380, padTop: 160, gap: 40, textGap: 120, fontSize: 120,
  bgRect: null,
  ribbonBuffer: blackRibbonBuf,
  accent: '#111111',
  outName: 'moospace-logo-dark.png',
});
