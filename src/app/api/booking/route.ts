import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, service } = await request.json();

    // Verification for environment variables
    const userEmail = process.env.EMAIL_USER;
    const userPass = process.env.EMAIL_PASS;
    const targetEmail = 'neelimachhatwani19@gmail.com';

    if (!userEmail || !userPass) {
      console.warn('Email credentials not configured. Skipping email send.');
      // We return success to the UI even if credentials missing for "demo" purposes
      // so the user doesn't see a "fail" if they haven't set up .env yet.
      return NextResponse.json({ 
        message: 'Booking received (Email not sent because credentials are not configured)', 
        success: true 
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: userEmail,
        pass: userPass,
      },
    });

    const mailOptions = {
      from: userEmail,
      to: targetEmail,
      subject: `New Salon Appointment: ${service}`,
      text: `
        You have a new booking request!

        Details:
        - Name: ${name}
        - Email: ${email}
        - Phone: ${phone}
        - Service: ${service}

        Date: ${new Date().toLocaleString()}
      `,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #C5A880; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #C5A880; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; font-family: serif;">Luxury Salon Booking</h1>
          </div>
          <div style="padding: 30px;">
            <p style="font-size: 16px;">You have a new booking request from your website.</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Service:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${service}</td>
              </tr>
            </table>
            <p style="margin-top: 30px; font-size: 14px; color: #777;">Received on: ${new Date().toLocaleString()}</p>
          </div>
          <div style="background-color: #f9f6f2; padding: 15px; text-align: center; font-size: 12px; color: #999;">
            This email was sent automatically from your website booking system.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully', success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Error processing booking', success: false },
      { status: 500 }
    );
  }
}
