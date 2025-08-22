export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Agent Analytics <hello@agentanalyticsai.com>',
      to: ['grant@agentanalyticsai.com'],
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
      reply_to: formData.email, // Fixed: replyTo -> reply_to
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

// Simple test endpoint
export async function GET() {
  return NextResponse.json({ 
    message: 'Contact API is working',
    hasResendKey: !!process.env.RESEND_API_KEY
  });
}
