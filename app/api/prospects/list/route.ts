import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const PROSPECTS_FILE = path.join(DATA_DIR, 'prospects.json');

async function readProspects(): Promise<any[]> {
  try {
    const data = await fs.readFile(PROSPECTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function GET() {
  try {
    const prospects = await readProspects();
    // Tri par date décroissante
    const sorted = prospects.sort(
      (a: any, b: any) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return NextResponse.json(sorted);
  } catch (err) {
    console.error('Error reading prospects:', err);
    return NextResponse.json([], { status: 500 });
  }
}
