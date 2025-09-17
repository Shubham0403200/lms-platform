import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const sendMail = async ({ email, username, verifyCode }: { email: string; username: string; verifyCode: string }) => {

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
        subject: `OTP Verification of ${username} for IELTS STRATEGIES 101`,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2>Welcome to IELTS STRATEGIES 101, ${username}!</h2>
                <p>Thank you for joining us. We are thrilled to have you on board.</p>
                <p>To complete your registration, please use the following OTP (One-Time Password) to verify your account:</p>
                <p style="font-size: 18px; font-weight: bold;">${verifyCode}</p>
                <p>This OTP is valid for the next 1 hour. If you didn't request this registration, please ignore this email.</p>
                <p>Best regards,<br>IELTS STRATEGIES 101</p>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email Sent");
        return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });
    } catch (error) {
        console.log("Error sending email:", error);
        return NextResponse.json({ success: false, message: "Failed to send email!" }, { status: 500 });
    }
}
