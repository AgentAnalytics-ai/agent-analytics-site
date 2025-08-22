export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.challenge) {
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

    await resend.emails.send({
      from: 'Agent Analytics <noreply@agentanalytics.com>',
      to: ['grant@agentanalyticsai.com'],
      subject: `New Contact Form Submission from ${formData.name}`,
      html: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ 
      error: 'Failed to send email. Please try again or contact us directly.' 
    }, { status: 500 });
  }
}
