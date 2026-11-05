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
  { value: "package", label: "Multiple Services" },
  { value: "not-sure", label: "General Enquiry" },
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
  businessWebsite?: string;
  websiteStatus?: string;
  companyFax?: string;
};

export type EnquiryErrors = Partial<
  Record<keyof EnquiryInput, string>
>;

export const ENQUIRY_LIMITS = {
  fullName: 100,
  businessName: 150,
  email: 254,
  phone: 30,
  message: 2000,
  businessWebsite: 500,
} as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const allowedIndustries = new Set<string>(
  industryOptions
    .map((option) => option.value)
    .filter(Boolean),
);

const allowedServices = new Set<string>(
  serviceInterestOptions
    .map((option) => option.value)
    .filter(Boolean),
);

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
    businessWebsite: "",
    websiteStatus: "",
    companyFax: "",
  };
}

export function validateEnquiry(
  input: EnquiryInput,
): EnquiryErrors {
  const errors: EnquiryErrors = {};

  const fullName = input.fullName.trim();
  const businessName = input.businessName.trim();
  const email = input.email.trim();
  const phone = input.phone.trim();
  const message = input.message.trim();

  if (!fullName) {
    errors.fullName = "Enter your full name.";
  } else if (fullName.length > ENQUIRY_LIMITS.fullName) {
    errors.fullName = "Your name is too long.";
  }

  if (!businessName) {
    errors.businessName = "Enter your business name.";
  } else if (
    businessName.length > ENQUIRY_LIMITS.businessName
  ) {
    errors.businessName = "Your business name is too long.";
  }

  if (!email) {
    errors.email = "Enter your email address.";
  } else if (
    email.length > ENQUIRY_LIMITS.email ||
    !emailPattern.test(email)
  ) {
    errors.email = "Enter a valid email address.";
  }

  if (
    phone &&
    (phone.length < 8 ||
      phone.length > ENQUIRY_LIMITS.phone ||
      !/^\+?[0-9\s().-]+$/.test(phone))
  ) {
    errors.phone =
      "Enter a valid phone number, or leave this field blank.";
  }

  if (!allowedIndustries.has(input.industry)) {
    errors.industry = "Select a valid industry.";
  }

  if (!allowedServices.has(input.serviceInterest)) {
    errors.serviceInterest = "Select a valid service.";
  }

  if (!message) {
    errors.message = "Tell us a little about what you need.";
  } else if (message.length < 20) {
    errors.message =
      "Please add a little more detail (at least 20 characters).";
  } else if (message.length > ENQUIRY_LIMITS.message) {
    errors.message = "Your message is too long.";
  }

  if (input.businessWebsite) {
    try {
      const url = new URL(input.businessWebsite);
      if (input.businessWebsite.length > ENQUIRY_LIMITS.businessWebsite || !["https:", "http:"].includes(url.protocol) || !url.hostname.includes(".") || url.username || url.password) throw new Error();
    } catch { errors.businessWebsite = "Enter a valid http or https website address, or leave blank."; }
  }
  if (input.websiteStatus && !["yes", "no", "developing"].includes(input.websiteStatus)) errors.websiteStatus = "Select a valid website status.";
  if (input.companyFax) errors.companyFax = "Unable to process this enquiry.";

  if (input.privacy !== true) {
    errors.privacy =
      "Please acknowledge the privacy notice before submitting.";
  }

  return errors;
}

export function parseEnquiryPayload(
  payload: unknown,
): EnquiryInput | null {
  if (
    !payload ||
    typeof payload !== "object" ||
    Array.isArray(payload)
  ) {
    return null;
  }

  const data = payload as Record<string, unknown>;

  const stringFields = [
    "fullName",
    "businessName",
    "email",
    "phone",
    "industry",
    "serviceInterest",
    "message",
  ] as const;

  for (const field of stringFields) {
    if (typeof data[field] !== "string") {
      return null;
    }
  }

  for (const field of ["businessWebsite", "websiteStatus", "companyFax"]) {
    if (data[field] !== undefined && typeof data[field] !== "string") return null;
  }
  if (typeof data.privacy !== "boolean") {
    return null;
  }

  return {
    fullName: data.fullName as string,
    businessName: data.businessName as string,
    email: data.email as string,
    phone: data.phone as string,
    industry: data.industry as string,
    serviceInterest: data.serviceInterest as string,
    message: data.message as string,
    privacy: data.privacy,
    ...(data.businessWebsite !== undefined ? { businessWebsite: data.businessWebsite as string } : {}),
    ...(data.websiteStatus !== undefined ? { websiteStatus: data.websiteStatus as string } : {}),
    ...(data.companyFax !== undefined ? { companyFax: data.companyFax as string } : {}),
  };
}