import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // -------------------------------------------------------
    // OPTION A: Log to console (default — works without setup)
    // -------------------------------------------------------
    console.log("📩 New contact message:", { name, email, subject, message });

    // -------------------------------------------------------
    // OPTION B: Nodemailer (uncomment and npm i nodemailer)
    // -------------------------------------------------------
    // const nodemailer = await import("nodemailer");
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    // });
    // await transporter.sendMail({
    //   from: `"${name}" <${email}>`,
    //   to: process.env.EMAIL_TO ?? "jahanzaib@hyperlogic.studio",
    //   subject: subject || `Portfolio contact from ${name}`,
    //   text: message,
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
