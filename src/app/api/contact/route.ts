export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Add comprehensive logging
    console.log('Contact API called');
    console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
    
    const formData = await request.json();
    console.log('Form data received:', formData);
    
    if (!formData.name || !formData.email || !formData.message) {
      console.log('Missing required fields');
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Use verified domain
    const result = await resend.emails.send({
      from: 'Agent Analytics <hello@agentanalyticsai.com>', // Use your verified domain
      to: ['grant@agentanalyticsai.com'],
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
      replyTo: formData.email, // Better UX
    });

    console.log('Email sent successfully:', result);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Detailed error:', error);
    return NextResponse.json({ 
      error: 'Failed to send email. Please try again or contact us directly.',
      details: process.env.NODE_ENV === 'development' ? error instanceof Error ? error.message : 'Unknown error' : undefined
    }, { status: 500 });
  }
}

// Add GET method for testing
export async function GET() {
  return NextResponse.json({ 
    message: 'Contact API is working',
    timestamp: new Date().toISOString(),
    env: {
      hasResendKey: !!process.env.RESEND_API_KEY,
      nodeEnv: process.env.NODE_ENV
    }
  });
}
