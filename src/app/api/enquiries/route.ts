import { NextResponse } from "next/server";

import {
  parseEnquiryPayload,
  validateEnquiry,
} from "@/lib/enquiry";

const MAX_REQUEST_BYTES = 16 * 1024;

function errorResponse(
  message: string,
  status: number,
  errors?: Record<string, string>,
) {
  return NextResponse.json(
    {
      ok: false,
      demo: true,
      message,
      ...(errors ? { errors } : {}),
    },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}

export async function POST(request: Request) {
  const contentType =
    request.headers.get("content-type") ?? "";

  if (
    !/^application\/json(?:\s*;|$)/i.test(contentType)
  ) {
    return errorResponse(
      "Only JSON requests are supported.",
      415,
    );
  }

  const declaredLength = request.headers.get(
    "content-length",
  );

  if (declaredLength !== null) {
    const size = Number(declaredLength);

    if (
      !Number.isSafeInteger(size) ||
      size < 0 ||
      size > MAX_REQUEST_BYTES
    ) {
      return errorResponse(
        "The enquiry exceeds the allowed request size.",
        413,
      );
    }
  }

  let payload: unknown;

  try {
    const reader = request.body?.getReader();

    if (!reader) {
      return errorResponse(
        "The enquiry could not be read.",
        400,
      );
    }

    const chunks: Uint8Array[] = [];
    let totalBytes = 0;

    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      totalBytes += value.byteLength;

      if (totalBytes > MAX_REQUEST_BYTES) {
        await reader.cancel().catch(() => undefined);

        return errorResponse(
          "The enquiry exceeds the allowed request size.",
          413,
        );
      }

      chunks.push(value);
    }

    const bytes = new Uint8Array(totalBytes);
    let offset = 0;

    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }

    const text = new TextDecoder("utf-8", {
      fatal: true,
    }).decode(bytes);

    payload = JSON.parse(text);
  } catch {
    return errorResponse(
      "The enquiry could not be read.",
      400,
    );
  }

  const parsed = parseEnquiryPayload(payload);

  if (!parsed) {
    return errorResponse(
      "The enquiry contains missing or invalid fields.",
      400,
    );
  }

  const errors = validateEnquiry(parsed);

  if (Object.keys(errors).length > 0) {
    return errorResponse(
      "Please check the highlighted fields and try again.",
      400,
      errors,
    );
  }

  // Demonstration mode:
  // Do not store, log, email or forward personal data.
  return errorResponse(
    "Enquiry submission is in demonstration mode. " +
      "Your details have not been stored or emailed. " +
      "A secure backend must be configured before public launch.",
    503,
  );
}