import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const forgetPassword = async ({
  email,
  username,
  resetToken,
}: {
  email: string;
  username: string;
  resetToken: string;
}) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.SMTP_GMAIL_USER,
      pass: process.env.SMTP_GMAIL_PASSWORD,
    },
    logger: true,
    debug: true,
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_GMAIL_USER,
    to: email,
    subject: `Reset Password Request | IELTS STRATEGIES 101`,
    html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; max-width: 600px; margin: auto;">
        <h2 style="color: #333;">Hello ${username},</h2>
        <p>You requested to reset your password. Please click the button below to proceed:</p>
        <a href="${process.env.CLIENT_URL}/reset-password?token=${resetToken}" target="_blank" style="text-decoration: none;">
        <button style="background-color: #4CAF50; color: white; padding: 10px 6px; border: none; border-radius: 5px; cursor: pointer; font-size: 12px;">
            Reset Password
        </button>
        </a>
        <p>If you did not request this, please ignore this email.</p>
        <p>Thank you!</p>
    </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email Sent");
    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.log("Error sending email:", error);
    return NextResponse.json({
      success: false,
      message: "Failed to send email!",
    });
  }
};
