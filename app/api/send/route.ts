import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import officers from '@/lib/officerData';

const DEFAULT_TO_EMAIL = 'jrwishart@hotmail.co.uk';
const FROM_EMAIL = 'Contact Police <noreply@contactpolice.uk>';
const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  throw new Error('RESEND_API_KEY is missing. Add it to your environment variables.');
}

const resend = new Resend(resendApiKey);

const sanitizeInput = (value: unknown, maxLength = 2000) =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : '';

const escapeHtml = (input: string) =>
  input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = sanitizeInput(body?.name, 120);
    const email = sanitizeInput(body?.email, 120);
    const phone = sanitizeInput(body?.phone, 60);
    const message = sanitizeInput(body?.message);
    const incidentNumber = sanitizeInput(body?.incidentNumber, 120);
    const incidentDate = sanitizeInput(body?.incidentDate, 60);
    const reason = sanitizeInput(body?.reason, 180);
    const officerId = sanitizeInput(body?.officerId, 40);
    const officerName = sanitizeInput(body?.officerName, 160);

    if (!name || !email || !message || !officerId) {
      return NextResponse.json(
        { success: false, error: 'Name, email, message, and officer are required.' },
        { status: 400 }
      );
    }

    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

    const html = `
      <h2>New ContactPolice.uk Submission</h2>
      <p><strong>Officer:</strong> ${
        officerName && officerId
          ? `${officerName} (${officerId.toUpperCase()})`
          : 'Not specified'
      }</p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || 'N/A')}</p>
      <p><strong>Reason:</strong> ${escapeHtml(reason || 'N/A')}</p>
      <p><strong>Incident Date:</strong> ${escapeHtml(incidentDate || 'N/A')}</p>
      <p><strong>Incident Number:</strong> ${escapeHtml(incidentNumber || 'N/A')}</p>
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    `;

    const matchedOfficer = officers.find(
      (entry) => entry.id.toLowerCase() === (officerId as string | undefined)?.toLowerCase()
    );

    const toEmail = matchedOfficer?.email || DEFAULT_TO_EMAIL;

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: toEmail,
      subject: 'New ContactPolice.uk Submission',
      html,
      replyTo: email,
    });

    if (error) {
      console.error('Resend email error:', error instanceof Error ? error.message : 'Unknown error');
      return NextResponse.json({ success: false, error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error handling send request:', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json({ success: false, error: 'Internal server error.' }, { status: 500 });
  }
}
