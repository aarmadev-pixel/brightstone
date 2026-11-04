import type { EnquiryErrors } from "./enquiry";

type EnquiryResponse = {
  ok: false;
  demo: boolean;
  message: string;
  errors?: EnquiryErrors;
};

type Result =
  | { type: "demo"; message: string }
  | { type: "error"; message: string; errors?: EnquiryErrors };

function parseResponse(value: unknown): EnquiryResponse | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const data = value as Record<string, unknown>;
  if (data.ok !== false || typeof data.demo !== "boolean" ||
      typeof data.message !== "string" || !data.message.trim()) return null;
  const errors: EnquiryErrors = {};
  if (data.errors !== undefined) {
    if (!data.errors || typeof data.errors !== "object" || Array.isArray(data.errors)) return null;
    for (const [key, message] of Object.entries(data.errors)) {
      if (!["fullName", "businessName", "email", "phone", "industry", "serviceInterest", "message", "privacy"].includes(key) ||
          typeof message !== "string" || !message.trim() || message.length > 500) return null;
      errors[key as keyof EnquiryErrors] = message;
    }
  }
  return { ok: false, demo: data.demo, message: data.message, errors };
}

// Interpret untrusted JSON by status and shape. Never claim successful delivery.
export function interpretEnquiryResponse(status: number, value: unknown): Result {
  const data = parseResponse(value);
  if (status === 400) return {
    type: "error", message: "Please check your enquiry details and try again. Your entries are still here.",
    ...(data && Object.keys(data.errors ?? {}).length ? { errors: data.errors } : {}),
  };
  if (status === 413) return { type: "error", message: "This enquiry exceeds the request size limit. Shorten your message and try again." };
  if (status === 415) return { type: "error", message: "The service could not read the request format. Please reload the page and try again." };
  if (status === 503 && data?.demo === true) return {
    type: "demo", message: "Enquiry checking is in demonstration mode. Your details have not been stored or emailed.",
  };
  return { type: "error", message: "The enquiry service returned an unexpected response. Delivery cannot be confirmed. Your entries are still here; please try again later." };
}
