import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { prisma } from '@/lib/db';

// Define proper interface for contact form data
interface ContactSubmissionData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  challenge?: string;
  timeline?: string;
  budget?: string;
  message?: string;
}

// Add webhook function
async function sendToCRM(submissionData: ContactSubmissionData) {
  const webhookUrl = process.env.CRM_WEBHOOK_URL;

  if (!webhookUrl) {
    return;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'contact_form_submission',
        data: submissionData,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`CRM webhook failed: ${response.status}`);
    }
  } catch {
    // Silently fail for webhook errors
  }
}

// Add Notion integration function
async function sendToNotion(submissionData: ContactSubmissionData) {
  const notionApiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!notionApiKey || !databaseId) {
    return;
  }

  try {
    const response = await fetch(`https://api.notion.com/v1/pages`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${notionApiKey}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: { database_id: databaseId },
        properties: {
          Name: {
            title: [
              {
                text: {
                  content: submissionData.name,
                },
              },
            ],
          },
          Email: {
            email: submissionData.email,
          },
          Message: {
            rich_text: [
              {
                text: {
                  content:
                    submissionData.challenge || submissionData.message || '',
                },
              },
            ],
          },
          Company: {
            rich_text: [
              {
                text: {
                  content: submissionData.company || 'N/A',
                },
              },
            ],
          },
          Service: {
            rich_text: [
              {
                text: {
                  content: submissionData.service || 'N/A',
                },
              },
            ],
          },
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Notion API failed: ${response.status}`);
    }
  } catch {
    // Silently fail for Notion errors
  }
}

// Add Airtable integration function
async function sendToAirtable(submissionData: ContactSubmissionData) {
  const airtableApiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME;

  if (!airtableApiKey || !baseId || !tableName) {
    return;
  }

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${baseId}/${tableName}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${airtableApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Name: submissionData.name,
                Email: submissionData.email,
                Company: submissionData.company || '',
                Phone: submissionData.phone || '',
                Service: submissionData.service || '',
                Challenge: submissionData.challenge || '',
                Timeline: submissionData.timeline || '',
                Budget: submissionData.budget || '',
                Message: submissionData.message || '',
                'Submission Date': new Date().toISOString(),
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Airtable API failed: ${response.status}`);
    }
  } catch {
    // Silently fail for Airtable errors
  }
}

export async function POST(request: NextRequest) {
  try {
    // SECURITY: Only use environment variable, no fallback
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();
    const {
      name,
      email,
      company,
      phone,
      service,
      challenge,
      timeline,
      budget,
      message,
    } = body;

    // Validate required fields
    if (!name || !email || !challenge) {
      return NextResponse.json(
        { error: 'Name, email, and challenge are required' },
        { status: 400 }
      );
    }

    // Log submission to database using Contact model
    try {
      await prisma.contact.create({
        data: {
          name,
          email,
          message: challenge || message,
        },
      });
    } catch (err) {
      // Log server-side error but continue with email sending
      console.error('Contact DB logging failed:', err);
    }

    // Also log to ContactSubmission model for backward compatibility
    try {
      await prisma.contactSubmission.create({
        data: {
          name,
          email,
          company,
          phone,
          service,
          challenge,
          timeline,
          budget,
        },
      });
    } catch (err) {
      // Log server-side error but continue with email sending
      console.error('ContactSubmission DB logging failed:', err);
    }

    // Send to external services
    const submissionData: ContactSubmissionData = {
      name,
      email,
      company,
      phone,
      service,
      challenge,
      timeline,
      budget,
      message,
    };

    // Send to Notion
    await sendToNotion(submissionData);

    // Send to Airtable
    await sendToAirtable(submissionData);

    // Send to CRM webhook
    await sendToCRM(submissionData);

    // Create HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937;">New Contact Form Submission</h2>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        </div>

        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Project Details</h3>
          ${service ? `<p><strong>Service of Interest:</strong> ${service}</p>` : ''}
          <p><strong>Challenge:</strong> ${challenge}</p>
          ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
          ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            This message was sent from the Agent Analytics contact form.
          </p>
        </div>
      </div>
    `;

    // Send email using Resend
    const result = await resend.emails.send({
      from: 'contact@agentanalyticsai.com',
      to: 'grant@agentanalyticsai.com',
      subject: `New Contact Form Submission from ${name}`,
      html: htmlContent,
      reply_to: email,
    });

    if (result.error) {
      return NextResponse.json(
        {
          error:
            'Oops! Couldn&apos;t reach us. Please email us directly at contact@agentanalyticsai.com',
        },
        { status: 500 }
      );
    }

    // Send confirmation email to user
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      if (!baseUrl) {
        throw new Error('NEXT_PUBLIC_BASE_URL is not configured');
      }
      
      await fetch(`${baseUrl}/api/contact/confirm`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
    } catch (err) {
      // Log server-side error but don't fail the main submission
      console.error('Contact confirmation failed:', err);
    }

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (err) {
    console.error('Contact form submission failed:', err);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
