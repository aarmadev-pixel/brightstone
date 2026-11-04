import assert from "node:assert/strict";
import test from "node:test";

import {
  ENQUIRY_LIMITS,
  parseEnquiryPayload,
  validateEnquiry,
} from "../src/lib/enquiry.ts";

function validEnquiry() {
  return {
    fullName: "Alex Smith",
    businessName: "Smith Plumbing",
    email: "alex@example.co.uk",
    phone: "07123 456789",
    industry: "plumbing",
    serviceInterest: "ai-receptionist",
    message: "I would like to discuss handling missed calls.",
    privacy: true,
  };
}

test("accepts a valid enquiry", () => {
  assert.deepEqual(validateEnquiry(validEnquiry()), {});
});

test("rejects invalid dropdown values", () => {
  const enquiry = validEnquiry();
  enquiry.industry = "unlisted-industry";
  enquiry.serviceInterest = "unlisted-service";

  assert.deepEqual(validateEnquiry(enquiry), {
    industry: "Select a valid industry.",
    serviceInterest: "Select a valid service.",
  });
});

test("rejects text values above the shared limits", () => {
  const enquiry = validEnquiry();
  enquiry.fullName = "a".repeat(ENQUIRY_LIMITS.fullName + 1);
  enquiry.businessName = "a".repeat(ENQUIRY_LIMITS.businessName + 1);
  enquiry.email = `a${"b".repeat(ENQUIRY_LIMITS.email)}@example.co.uk`;
  enquiry.phone = "1".repeat(ENQUIRY_LIMITS.phone + 1);
  enquiry.message = "a".repeat(ENQUIRY_LIMITS.message + 1);

  const errors = validateEnquiry(enquiry);
  assert.equal(errors.fullName, "Your name is too long.");
  assert.equal(errors.businessName, "Your business name is too long.");
  assert.equal(errors.email, "Enter a valid email address.");
  assert.equal(
    errors.phone,
    "Enter a valid phone number, or leave this field blank.",
  );
  assert.equal(errors.message, "Your message is too long.");
});

test("rejects malformed payload shapes and field types", () => {
  assert.equal(parseEnquiryPayload(null), null);
  assert.equal(parseEnquiryPayload([]), null);
  assert.equal(parseEnquiryPayload({ ...validEnquiry(), privacy: "yes" }), null);
  assert.equal(parseEnquiryPayload({ ...validEnquiry(), email: 123 }), null);
});

test("parses well-shaped payloads for validation", () => {
  const enquiry = validEnquiry();
  assert.deepEqual(parseEnquiryPayload(enquiry), enquiry);
});
for (const field of ["fullName", "businessName", "email", "industry", "serviceInterest", "message"]) {
  test(`requires ${field}`, () => {
    assert.ok(validateEnquiry({ ...validEnquiry(), [field]: "" })[field]);
  });
}
for (const [field, value] of [
  ["email", "invalid"], ["message", "Too short"], ["privacy", false],
  ["phone", "letters!"],
]) {
  test(`rejects invalid ${field}`, () => {
    assert.ok(validateEnquiry({ ...validEnquiry(), [field]: value })[field]);
  });
}
test("accepts optional blank phone and exact length boundaries", () => {
  assert.deepEqual(validateEnquiry({ ...validEnquiry(), phone: "" }), {});
  for (const [field, value] of Object.entries({
    fullName: "a".repeat(100), businessName: "b".repeat(150),
    email: "a".repeat(249) + "@b.co", phone: "1".repeat(30), message: "m".repeat(2000),
  })) assert.deepEqual(validateEnquiry({ ...validEnquiry(), [field]: value }), {});
  assert.deepEqual(validateEnquiry({ ...validEnquiry(), message: "m".repeat(20) }), {});
});
for (const payload of [undefined, 42, "text", true, {}, { privacy: true }]) {
  test(`rejects payload shape ${JSON.stringify(payload)}`, () => {
    assert.equal(parseEnquiryPayload(payload), null);
  });
}
for (const field of Object.keys(validEnquiry())) {
  test(`rejects wrong type for ${field}`, () => {
    assert.equal(parseEnquiryPayload({ ...validEnquiry(), [field]: null }), null);
  });
}
