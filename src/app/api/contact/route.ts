export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { getPrisma } from '@/lib/db';

export async function POST(request: Request) {
  const prisma = getPrisma();
  const ct = request.headers.get('content-type') ?? '';
  let payload: Record<string, unknown> = {};

  try {
    if (ct.includes('application/json')) {
      payload = await request.json();
    } else if (ct.includes('application/x-www-form-urlencoded') || ct.includes('multipart/form-data')) {
      const form = await request.formData();
      payload = Object.fromEntries(form.entries());
    } else {
      return NextResponse.json({ error: 'Unsupported content type' }, { status: 415 });
    }
  } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 });
  }

  const { name, email, message } = payload as { name?: string; email?: string; message?: string };
  if (!name || !email || !message) return NextResponse.json({ error: 'Missing fields' }, { status: 422 });

  await prisma.contact.create({ data: { name, email, message } });
  return NextResponse.json({ ok: true });
}
