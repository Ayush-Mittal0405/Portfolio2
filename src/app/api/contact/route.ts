import { NextRequest, NextResponse } from "next/server";
import { validateContactPayload } from "@/lib/validation";

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as unknown;

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const { data, errors, valid } = validateContactPayload(body);

  if (!valid) {
    return NextResponse.json(
      { ok: false, message: "Please check the highlighted fields.", errors },
      { status: 422 },
    );
  }

  // TODO: Wire this to Resend, EmailJS, or a verified mail provider using Vercel env vars.
  // Keep provider secrets server-side and preserve this validation boundary.
  return NextResponse.json({
    ok: true,
    message: `Thanks, ${data.name}. This production stub received your message and is ready for a live email provider.`,
  });
}
