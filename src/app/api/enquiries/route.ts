import { NextResponse } from "next/server";
import { parseEnquiryPayload, validateEnquiry } from "@/lib/enquiry";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        demo: true,
        message: "The enquiry could not be read.",
      },
      { status: 400 },
    );
  }

  const parsed = parseEnquiryPayload(payload);
  if (!parsed) {
    return NextResponse.json(
      {
        ok: false,
        demo: true,
        message: "The enquiry was missing required fields.",
      },
      { status: 400 },
    );
  }

  const errors = validateEnquiry(parsed);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      {
        ok: false,
        demo: true,
        message: "Please check the highlighted fields and try again.",
        errors,
      },
      { status: 400 },
    );
  }

  return NextResponse.json(
    {
      ok: false,
      demo: true,
      message:
        "Enquiry submission is in demonstration mode. Your details have not been stored or emailed. A secure backend must be configured before public launch.",
    },
    { status: 503 },
  );
}
