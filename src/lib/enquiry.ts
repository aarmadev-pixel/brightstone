export const industryOptions = [
  { value: "", label: "Select an industry" },
  { value: "plumbing", label: "Plumbing" },
  { value: "electrical", label: "Electrical" },
  { value: "heating", label: "Heating & gas" },
  { value: "other", label: "Other small business" },
] as const;

export const serviceInterestOptions = [
  { value: "", label: "Select a service" },
  { value: "ai-receptionist", label: "AI telephone receptionist" },
  { value: "website", label: "Professional website" },
  { value: "chatbot", label: "AI website chatbot" },
  { value: "booking", label: "Appointment booking" },
  { value: "reviews", label: "Review management" },
  { value: "follow-ups", label: "Automated follow-ups" },
  { value: "automation", label: "Workflow automation" },
  { value: "package", label: "Full Brightstone Business package" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export type EnquiryInput = {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  industry: string;
  serviceInterest: string;
  message: string;
  privacy: boolean;
};

export type EnquiryErrors = Partial<Record<keyof EnquiryInput, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function emptyEnquiry(): EnquiryInput {
  return {
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    industry: "",
    serviceInterest: "",
    message: "",
    privacy: false,
  };
}

export function validateEnquiry(input: EnquiryInput): EnquiryErrors {
  const errors: EnquiryErrors = {};

  if (!input.fullName.trim()) errors.fullName = "Enter your full name.";
  if (!input.businessName.trim()) errors.businessName = "Enter your business name.";
  if (!input.email.trim()) errors.email = "Enter your email address.";
  else if (!emailPattern.test(input.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (input.phone.trim() && input.phone.trim().length < 8) {
    errors.phone = "Enter a valid phone number, or leave this field blank.";
  }
  if (!input.industry) errors.industry = "Select an industry.";
  if (!input.serviceInterest) {
    errors.serviceInterest = "Select a service of interest.";
  }
  if (!input.message.trim()) errors.message = "Tell us a little about what you need.";
  else if (input.message.trim().length < 20) {
    errors.message = "Please add a little more detail (at least 20 characters).";
  }
  if (!input.privacy) {
    errors.privacy = "Please acknowledge the privacy notice before submitting.";
  }

  return errors;
}

export function parseEnquiryPayload(payload: unknown): EnquiryInput | null {
  if (!payload || typeof payload !== "object") return null;
  const data = payload as Record<string, unknown>;
  if (typeof data.fullName !== "string") return null;
  if (typeof data.businessName !== "string") return null;
  if (typeof data.email !== "string") return null;
  if (typeof data.phone !== "string") return null;
  if (typeof data.industry !== "string") return null;
  if (typeof data.serviceInterest !== "string") return null;
  if (typeof data.message !== "string") return null;
  if (typeof data.privacy !== "boolean") return null;

  return {
    fullName: data.fullName,
    businessName: data.businessName,
    email: data.email,
    phone: data.phone,
    industry: data.industry,
    serviceInterest: data.serviceInterest,
    message: data.message,
    privacy: data.privacy,
  };
}
