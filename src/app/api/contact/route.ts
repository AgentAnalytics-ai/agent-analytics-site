export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
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

  try {
    await resend.emails.send({
      from: 'Agent Analytics <noreply@agentanalytics.com>',
      to: ['grant@agentanalyticsai.com'], // Your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
