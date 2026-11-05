import assert from "node:assert/strict";
import test from "node:test";
import { interpretEnquiryResponse } from "../src/lib/enquiry-response.ts";

for (const status of [200, 201, 202, 400, 403, 413, 415, 500, 502, 503]) {
  test(`HTTP ${status} cannot claim delivery without a configured integration`, () => {
    for (const body of [null, {}, {ok: true, message: "Accepted"}, {ok: false, message: "Unavailable"}]) {
      assert.equal(interpretEnquiryResponse(status, body).type, "error");
    }
  });
}
test("503 clearly states the enquiry was not sent", () => {
  assert.match(interpretEnquiryResponse(503, {}).message, /has not been sent/);
});
test("400 associates validated field errors", () => {
  assert.deepEqual(interpretEnquiryResponse(400, { ok: false, message: "Invalid", errors: {email: "Invalid email", websiteStatus: "Invalid status"} }).errors,
    { email: "Invalid email", websiteStatus: "Invalid status" });
});
test("untrusted error fields and internal messages are not displayed", () => {
  const result = interpretEnquiryResponse(400, { ok: false, message: "private provider details", errors: {secret: "unexpected"} });
  assert.equal(result.errors, undefined);
  assert.equal(result.message.includes("private provider details"), false);
});
