import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { name, email } = await request.json();

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937;">Thanks for reaching out, ${name}!</h2>

        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          We've received your message and are excited to learn more about your project. 
          Our team will review your inquiry and get back to you within 24 hours.
        </p>

        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">What happens next?</h3>
          <ol style="color: #374151; line-height: 1.8;">
            <li>We'll review your message within 24 hours</li>
            <li>Schedule a free consultation call to discuss your needs</li>
            <li>Receive a customized proposal tailored to your challenge</li>
          </ol>
        </div>

        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          In the meantime, check out our latest insights on AI strategy and implementation 
          on our <a href="https://agentanalyticsai.com/blog" style="color: #3b82f6;">blog</a>.
        </p>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            Best regards,<br>
            The Agent Analytics Team
          </p>
        </div>
      </div>
    `;

    // No need to destructure `error`, let Resend throw an error if it fails
    await resend.emails.send({
      from: 'contact@agentanalyticsai.com',
      to: email,
      subject: 'Thanks for reaching out - Agent Analytics',
      html: htmlContent,
    });

    return NextResponse.json({ message: 'Confirmation sent' }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
