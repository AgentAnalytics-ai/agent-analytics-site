export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    console.log('=== CONTACT API CALLED ===');
    console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
    
    const formData = await request.json();
    console.log('Form data received:', JSON.stringify(formData, null, 2));
    
    // Accept both 'message' and 'challenge' fields
    const message = formData.message || formData.challenge;
    
    if (!formData.name || !formData.email || !message) {
      console.log('Missing required fields:', { 
        name: !!formData.name, 
        email: !!formData.email, 
        message: !!message 
      });
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    console.log('Sending email...');
    
    const result = await resend.emails.send({
      from: 'Agent Analytics <onboarding@resend.dev>', // Use Resend's verified domain
      to: ['grantnewvisionllc@gmail.com'],
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Service Interest:</strong> ${formData.service || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${formData.timeline || 'Not specified'}</p>
        <p><strong>Budget Range:</strong> ${formData.budget || 'Not specified'}</p>
        <p><strong>Challenge Description:</strong></p>
        <p>${message}</p>
      `,
      reply_to: formData.email,
    });

    console.log('Email sent successfully:', result);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('=== CONTACT API ERROR ===');
    console.error('Error details:', error);
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    return NextResponse.json({ 
      error: 'Failed to send email. Please try again or contact us directly.',
      details: process.env.NODE_ENV === 'development' ? error instanceof Error ? error.message : 'Unknown error' : undefined
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Contact API is working',
    hasResendKey: !!process.env.RESEND_API_KEY,
    timestamp: new Date().toISOString()
  });
}
