import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { sendProspectNotification } from '@/lib/email';

const DATA_DIR = path.join(process.cwd(), 'data');
const PROSPECTS_FILE = path.join(DATA_DIR, 'prospects.json');

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (err) {
    console.error('Error creating data directory:', err);
  }
}

async function readProspects(): Promise<any[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(PROSPECTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeProspects(prospects: any[]) {
  await ensureDataDir();
  await fs.writeFile(PROSPECTS_FILE, JSON.stringify(prospects, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validation basique
    if (!body.firstName || !body.lastName || !body.phone) {
      return NextResponse.json(
        { message: 'Champs obligatoires manquants' },
        { status: 400 }
      );
    }

    // Anti-spam: vérifier les doublons dans les 24 dernières heures
    const prospects = await readProspects();
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
    const recentPhone = prospects.some(
      (p: any) =>
        p.phone === body.phone &&
        new Date(p.createdAt).getTime() > oneDayAgo
    );

    if (recentPhone) {
      return NextResponse.json(
        { message: 'Une demande avec ce numéro a été reçue récemment' },
        { status: 400 }
      );
    }

    // Créer le prospect
    const newProspect = {
      id: Date.now().toString(),
      ...body,
      status: 'nouveau',
      createdAt: new Date().toISOString(),
      source: request.headers.get('referer') || 'direct',
    };

    // Enregistrer
    prospects.push(newProspect);
    await writeProspects(prospects);

    // Envoyer email de notification
    try {
      await sendProspectNotification(newProspect);
    } catch (emailErr) {
      console.error('Email notification failed, but prospect was saved:', emailErr);
    }

    return NextResponse.json(
      {
        message: 'Demande reçue avec succès',
        prospectId: newProspect.id,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error('Error creating prospect:', err);
    return NextResponse.json(
      { message: 'Erreur lors de la création du prospect' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Endpoint pour vérifier que l'API fonctionne
  return NextResponse.json({ status: 'ok' });
}
