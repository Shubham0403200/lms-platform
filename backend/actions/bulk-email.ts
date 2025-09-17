import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { Preview } from "@/components/context/preview";

export const bulkEmail = async ({
  email, subject, message
}: {
  email: string;
  subject: string;
  message: string;
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
    subject: subject,
    html: `<Preview value=${message} />` ,
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
