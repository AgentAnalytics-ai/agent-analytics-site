export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    console.log('=== CONTACT API CALLED ===');
    
    const formData = await request.json();
    console.log('Form data received:', JSON.stringify(formData, null, 2));
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json({ 
        error: 'Missing required fields: name, email, and message are required' 
      }, { status: 400 });
    }

    console.log('Sending email...');
    
    const result = await resend.emails.send({
      from: 'Agent Analytics <onboarding@resend.dev>',
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
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
      `,
      reply_to: formData.email,
    });

    console.log('Email sent successfully:', result);
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      id: result.data?.id 
    });
  } catch (error) {
    console.error('=== CONTACT API ERROR ===', error);
    
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
