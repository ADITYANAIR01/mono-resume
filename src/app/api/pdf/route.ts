"use server";

import { NextResponse } from "next/server";
import puppeteer from 'puppeteer';

async function generatePDF(html: string): Promise<Buffer> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set content directly from the HTML string
    await page.setContent(html, {
      waitUntil: 'networkidle0',
    });

    // Calculate the height of the content
    const height = await page.evaluate(() => {
      // Remove any unnecessary elements that might have display: none
      document.querySelectorAll('[style*="display: none"]').forEach(el => el.remove());
      
      // Get the full height of the content
      const body = document.body;
      const html = document.documentElement;
      
      return Math.max(
        body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight
      );
    });

    // Generate PDF with custom page size
    const pdfUint8Array = await page.pdf({
      width: '8.27in', // A4 width
      height: `${height}px`,
      printBackground: true,
      margin: { top: '10px', right: '10px', bottom: '10px', left: '10px' },
      scale: 0.95,
      preferCSSPageSize: false // Disable CSS page size to use our custom dimensions
    });

    // Convert Uint8Array to Buffer
    const pdf = Buffer.from(pdfUint8Array);

    return pdf;
  } finally {
    await browser.close();
  }
}

export async function POST(request: Request) {
  const { html } = await request.json();

  if (!html || typeof html !== "string") {
    return NextResponse.json(
      { error: "Invalid HTML content" },
      { status: 400 }
    );
  }

  try {
    const pdf = await generatePDF(html);
    return new NextResponse(pdf, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=resume.pdf",
      },
    });
  } catch (error: any) {
    console.error("Error generating PDF:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate PDF" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ count: 0 });
}
