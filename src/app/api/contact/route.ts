export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { validateEnv } from '@/lib/env';

// Rate limiting (simple in-memory for now)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimit.get(ip);
  
  if (!limit || now > limit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + 60000 }); // 1 minute window
    return true;
  }
  
  if (limit.count >= 3) { // 3 requests per minute
    return false;
  }
  
  limit.count++;
  return true;
}

function getClientIP(request: NextRequest): string {
  // Next.js 15 way to get IP address
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  return 'unknown';
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting with proper IP detection
    const ip = getClientIP(request);
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Validate environment
    const env = validateEnv();
    
    // Parse and validate request
    const formData = await request.json();
    
    // Basic validation
    if (!formData.name?.trim() || !formData.email?.trim() || !formData.message?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
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

    // Send notification email
    const result = await resend.emails.send({
      from: 'Agent Analytics <hello@agentanalyticsai.com>', // Switch back to your domain
      to: ['grant@agentanalyticsai.com'],
      subject: `New Contact Form: ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937;">New Contact Form Submission</h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
            <p><strong>Service:</strong> ${formData.service || 'Not specified'}</p>
            <p><strong>Timeline:</strong> ${formData.timeline || 'Not specified'}</p>
            <p><strong>Budget:</strong> ${formData.budget || 'Not specified'}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151;">Message:</h3>
            <p style="color: #6b7280; line-height: 1.6;">${formData.message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              Submitted at: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      reply_to: formData.email,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully' 
    });

  } catch (error) {
    console.error('Contact API Error:', error);
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: 'Contact API is operational',
    timestamp: new Date().toISOString()
  });
}
