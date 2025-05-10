"use server";

import { NextResponse } from "next/server";
import Database from "better-sqlite3";
import PQueue from "p-queue";
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

// Initialize the queue
const queue = new PQueue({ concurrency: 3 });

// Use an environment variable for the database path, with a default that matches Coolify's volume path
const dbPath = process.env.DB_PATH || '/db/pdf_count.sqlite';

// Ensure the directory exists
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
  console.log(`Creating directory: ${dbDir}`);
  fs.mkdirSync(dbDir, { recursive: true });
}

// Initialize the database
console.log(`Initializing database at: ${dbPath}`);
const db = new Database(dbPath);

// Initialize database schema
db.exec(`
  CREATE TABLE IF NOT EXISTS pdf_count (id INTEGER PRIMARY KEY, count INTEGER DEFAULT 0);
  INSERT OR IGNORE INTO pdf_count (id, count) VALUES (1, 0);
`);

// Prepare statements
const incrementCount = db.prepare(
  "UPDATE pdf_count SET count = count + 1 WHERE id = 1"
);
const getCount = db.prepare("SELECT count FROM pdf_count WHERE id = 1");

async function generatePDF(html: string): Promise<Buffer> {
  const browser = await puppeteer.launch({
    headless: 'new',
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
    const pdf = await queue.add(() => generatePDF(html));
    incrementCount.run();

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
  try {
    const { count } = getCount.get() as { count: number };
    return NextResponse.json({ count });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch PDF count" },
      { status: 500 }
    );
  }
}
