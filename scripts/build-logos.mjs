import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs';
import { join, basename, dirname } from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';

const __dirname = dirname(fileURLToPath(import.meta.url));

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.DOMParser = dom.window.DOMParser;
global.XMLSerializer = dom.window.XMLSerializer;
global.Node = dom.window.Node;
global.Element = dom.window.Element;
global.SVGElement = dom.window.SVGElement;
global.HTMLElement = dom.window.HTMLElement;
Object.defineProperty(global, 'navigator', { value: dom.window.navigator, configurable: true });

const { jsPDF } = await import('jspdf');
await import('svg2pdf.js');
const ROOT = join(__dirname, '..');
const CONCEPTS_DIR = join(ROOT, 'assets', 'logos', 'concepts');
const OUT_DIR = join(ROOT, 'assets', 'logos', 'exports');

const PNG_SIZES = [256, 512, 1024];

function ensureDir(p) {
  if (!existsSync(p)) mkdirSync(p, { recursive: true });
}

function svgToPng(svgString, targetWidth) {
  const resvg = new Resvg(svgString, {
    fitTo: { mode: 'width', value: targetWidth },
    font: { loadSystemFonts: true },
    background: 'rgba(0,0,0,0)',
  });
  return resvg.render().asPng();
}

async function svgToPdf(svgString, outPath) {
  const parser = new global.DOMParser();
  const doc = parser.parseFromString(svgString, 'image/svg+xml');
  const svgEl = doc.documentElement;
  global.document.body.appendChild(svgEl);
  const vb = (svgEl.getAttribute('viewBox') || '0 0 200 200').split(/\s+/).map(Number);
  const w = vb[2], h = vb[3];
  const pdf = new jsPDF({
    orientation: w >= h ? 'landscape' : 'portrait',
    unit: 'pt',
    format: [w, h],
  });
  await pdf.svg(svgEl, { x: 0, y: 0, width: w, height: h });
  writeFileSync(outPath, Buffer.from(pdf.output('arraybuffer')));
  svgEl.remove();
}

function walkSvgs(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) files.push(...walkSvgs(p));
    else if (e.name.endsWith('.svg')) files.push(p);
  }
  return files;
}

async function main() {
  ensureDir(OUT_DIR);
  const svgs = walkSvgs(CONCEPTS_DIR);
  console.log(`Found ${svgs.length} SVG files`);

  for (const svgPath of svgs) {
    const rel = svgPath.replace(CONCEPTS_DIR + '\\', '').replace(CONCEPTS_DIR + '/', '');
    const conceptFolder = rel.split(/[\\/]/)[0];
    const fileStem = basename(svgPath, '.svg');
    const conceptOutDir = join(OUT_DIR, conceptFolder);
    ensureDir(conceptOutDir);

    const svgString = readFileSync(svgPath, 'utf-8');

    for (const size of PNG_SIZES) {
      const png = svgToPng(svgString, size);
      const pngPath = join(conceptOutDir, `${fileStem}-${size}.png`);
      writeFileSync(pngPath, png);
      console.log(`  PNG ${size}px → ${pngPath.replace(ROOT, '.')}`);
    }

    const pdfPath = join(conceptOutDir, `${fileStem}.pdf`);
    try {
      await svgToPdf(svgString, pdfPath);
      console.log(`  PDF vec → ${pdfPath.replace(ROOT, '.')}`);
    } catch (err) {
      const png1024 = svgToPng(svgString, 1024);
      const dataUrl = 'data:image/png;base64,' + png1024.toString('base64');
      const resvg = new Resvg(svgString);
      const meta = resvg.getBBox() || { width: 1024, height: 1024 };
      const vb = (svgString.match(/viewBox\s*=\s*"([^"]+)"/) || [, '0 0 200 200'])[1].split(/\s+/).map(Number);
      const w = vb[2], h = vb[3];
      const pdf = new jsPDF({
        orientation: w >= h ? 'landscape' : 'portrait',
        unit: 'pt',
        format: [w, h],
      });
      pdf.addImage(dataUrl, 'PNG', 0, 0, w, h);
      writeFileSync(pdfPath, Buffer.from(pdf.output('arraybuffer')));
      console.log(`  PDF png → ${pdfPath.replace(ROOT, '.')}`);
    }
  }
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
