export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Add GET method for testing the API
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

export async function POST(request: Request) {
  try {
    // Log environment variable status (remove in production)
    console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
    
    const formData = await request.json();
    console.log('Form data received:', formData);
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.challenge) {
      console.log('Missing required fields:', { name: !!formData.name, email: !!formData.email, challenge: !!formData.challenge });
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create comprehensive email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
      <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
      <p><strong>Service Interest:</strong> ${formData.service || 'Not specified'}</p>
      <p><strong>Timeline:</strong> ${formData.timeline || 'Not specified'}</p>
      <p><strong>Budget Range:</strong> ${formData.budget || 'Not specified'}</p>
      <p><strong>Challenge Description:</strong></p>
      <p>${formData.challenge}</p>
    `;

    console.log('Attempting to send email...');
    
    const result = await resend.emails.send({
      from: 'Agent Analytics <noreply@agentanalytics.com>',
      to: ['grant@agentanalyticsai.com'],
      subject: `New Contact Form Submission from ${formData.name}`,
      html: emailContent,
    });

    console.log('Email sent successfully:', result);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Detailed error:', error);
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    return NextResponse.json({ 
      error: 'Failed to send email. Please try again or contact us directly.',
      details: process.env.NODE_ENV === 'development' ? error instanceof Error ? error.message : 'Unknown error' : undefined
    }, { status: 500 });
  }
}
