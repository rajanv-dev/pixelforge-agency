import { NextRequest, NextResponse } from "next/server";
import { validateContactForm, isFormValid } from "@/lib/validation";
import type { ContactFormData } from "@/types";

/**
 * POST /api/contact — validates contact form payload and returns JSON.
 *
 * Frontend-functional only. To wire up real email delivery, integrate
 * an email provider (e.g., Resend, SendGrid, or Nodemailer) below.
 */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactFormData;

    const errors = validateContactForm(body);
    if (!isFormValid(errors)) {
      return NextResponse.json({ success: false, errors }, { status: 422 });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message received. We'll be in touch within 24 hours!",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }
}
