export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { validateEnv } from '@/lib/env';

export async function POST(request: NextRequest) {
  try {
    // Validate environment
    const env = validateEnv();
    
    // Parse and validate request
    const formData = await request.json();
    
    // Basic validation
    if (!formData.name?.trim() || !formData.email?.trim()) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Initialize Resend
    const resend = new Resend(env.RESEND_API_KEY);

    // Send notification email to you
    const result = await resend.emails.send({
      from: 'Agent Analytics <hello@agentanalyticsai.com>',
      to: ['grant@agentanalyticsai.com'],
      subject: `🎉 New Social Mixer Signup: ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937;">New Social Mixer Signup!</h2>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
            <h3 style="color: #1e40af; margin-top: 0;">Event Details</h3>
            <p style="color: #374151; margin-bottom: 8px;"><strong>Date:</strong> Monthly on a Thursday at 5:15 PM</p>
            <p style="color: #374151; margin-bottom: 8px;"><strong>Time:</strong> 5:15 PM - 7:15 PM</p>
            <p style="color: #374151;"><strong>Location:</strong> The Social Capital, Oklahoma City</p>
          </div>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Attendee Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
            <p><strong>How did they hear about us:</strong> ${formData.source || 'Not specified'}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              Signed up at: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      reply_to: formData.email,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully signed up for social mixer!' 
    });

  } catch (error) {
    console.error('Social Mixer API Error:', error);
    
    return NextResponse.json(
      { error: 'Failed to sign up. Please try again.' },
      { status: 500 }
    );
  }
}
