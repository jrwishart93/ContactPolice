import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import officers from '@/lib/officerData';

const DEFAULT_TO_EMAIL = 'jrwishart@hotmail.co.uk';
const FROM_EMAIL = 'Contact Police <noreply@contactpolice.uk>';
const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_jSdbgVhd_FHbkEwXhC9RD6knGo2NZNRRk';

export async function POST(req: Request) {
  try {
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured.');
      return NextResponse.json({ success: false, error: 'Email service not configured.' }, { status: 500 });
    }

    const resend = new Resend(RESEND_API_KEY);
    const body = await req.json();

    const {
      name,
      email,
      phone,
      message,
      incidentNumber,
      incidentDate,
      reason,
      officerId,
      officerName,
    } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const html = `
      <h2>New ContactPolice.uk Submission</h2>
      <p><strong>Officer:</strong> ${
        officerName && officerId
          ? `${officerName} (${officerId.toUpperCase()})`
          : 'Not specified'
      }</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <p><strong>Reason:</strong> ${reason || 'N/A'}</p>
      <p><strong>Incident Date:</strong> ${incidentDate || 'N/A'}</p>
      <p><strong>Incident Number:</strong> ${incidentNumber || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br/>')}</p>
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
      console.error('Resend email error:', error);
      return NextResponse.json({ success: false, error: 'Failed to send email.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error handling send request:', error);
    return NextResponse.json({ success: false, error: 'Internal server error.' }, { status: 500 });
  }
}
