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

    const pdf = await page.pdf({
      format: 'a4',
      printBackground: true,
      margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
    });

    return Buffer.from(pdf);
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
