#!/usr/bin/env node
/**
 * OhmWork Guide → Single PDF Export (A4)
 *
 * Requirements:
 * 1) npm install puppeteer pdf-lib
 * 2) node export-pdf.js
 *
 * This script visits the live site (https://ohmworkhq.com), loads the home page
 * and every module page (/modules/module-01 … /modules/module-10), waits for each
 * page to fully render (networkidle0), force-scrolls to trigger lazy-loaded
 * images, renders each to PDF (A4, with background), and merges the PDFs into
 * a single file: OhmWork_Guide.pdf
 */

/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const { PDFDocument } = require('pdf-lib');

const BASE_URL = process.env.OHM_BASE_URL || 'https://ohmworkhq.com';
const OUTPUT = path.resolve(process.cwd(), 'OhmWork_Guide.pdf');

// Home + Modules 01..10
const PATHS = [
  '/',
  '/modules/module-01',
  '/modules/module-02',
  '/modules/module-03',
  '/modules/module-04',
  '/modules/module-05',
  '/modules/module-06',
  '/modules/module-07',
  '/modules/module-08',
  '/modules/module-09',
  '/modules/module-10',
];

async function autoScroll(page) {
  // Scrolls the page to the bottom, waiting between steps to allow lazy loads
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 600;
      const timer = setInterval(() => {
        const { scrollHeight } = document.documentElement;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight + window.innerHeight >= scrollHeight - 2) {
          clearInterval(timer);
          resolve();
        }
      }, 150);
    });
  });
  // Give images a moment to settle after last scroll
  await page.waitForTimeout(750);
}

async function renderPageToPDFBytes(browser, url) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1280, height: 2000, deviceScaleFactor: 2 });
    await page.emulateMediaType('screen'); // match live site look

    console.log(`→ Navigating: ${url}`);
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 120000 });

    // Ensure all content/lazy images render
    await autoScroll(page);

    // PDF bytes for this page
    const pdfBytes = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '0.4in', right: '0.4in', bottom: '0.5in', left: '0.4in' },
    });
    return pdfBytes;
  } finally {
    await page.close().catch(() => {});
  }
}

async function main() {
  console.log('Launching headless Chromium…');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
    ],
  });

  try {
    const urls = PATHS.map((p) => new URL(p, BASE_URL).toString());

    // Render each page to individual PDF buffers
    const pagePDFs = [];
    for (const u of urls) {
      const bytes = await renderPageToPDFBytes(browser, u);
      pagePDFs.push(bytes);
    }

    // Merge PDFs into one
    console.log('Merging PDFs…');
    const merged = await PDFDocument.create();
    for (const bytes of pagePDFs) {
      const src = await PDFDocument.load(bytes);
      const copied = await merged.copyPages(src, src.getPageIndices());
      copied.forEach((p) => merged.addPage(p));
    }
    const mergedBytes = await merged.save();

    fs.writeFileSync(OUTPUT, mergedBytes);
    console.log(`✅ Export complete → ${OUTPUT}`);
  } catch (err) {
    console.error('❌ Export failed:', err);
    process.exitCode = 1;
  } finally {
    await browser.close().catch(() => {});
  }
}

if (require.main === module) {
  main();
}

/**
 * How to run:
 * 1) Install deps (once):
 *    npm install puppeteer pdf-lib
 * 2) Export the guide (creates OhmWork_Guide.pdf in project root):
 *    node export-pdf.js
 *
 * Optional: export from a different base URL
 *    OHM_BASE_URL="https://preview-ohmwork.vercel.app" node export-pdf.js
 */


