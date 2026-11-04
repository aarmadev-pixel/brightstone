import assert from "node:assert/strict";
import test from "node:test";
import { interpretEnquiryResponse } from "../src/lib/enquiry-response.ts";
const demo = { ok: false, demo: true, message: "Demo" };
for (const status of [200, 400, 413, 415, 500, 502]) {
  test(`HTTP ${status} with demo marker remains an error`, () => {
    assert.equal(interpretEnquiryResponse(status, demo).type, "error");
  });
}
test("only expected 503 response enters demo screen", () => {
  assert.equal(interpretEnquiryResponse(503, demo).type, "demo");
});
for (const body of [null, [], "string", 1, {}, { ...demo, demo: false },
  { ...demo, message: {} }, { ...demo, ok: true }, { ...demo, errors: { email: 123 } }]) {
  test(`rejects unexpected response ${JSON.stringify(body)}`, () => {
    assert.equal(interpretEnquiryResponse(503, body).type, "error");
  });
}
test("400 associates validated field errors", () => {
  assert.deepEqual(interpretEnquiryResponse(400, { ...demo, errors: { email: "Invalid email" } }).errors,
    { email: "Invalid email" });
});
test("unknown field errors are rejected", () => {
  assert.equal(interpretEnquiryResponse(400, { ...demo, errors: { secret: "unexpected" } }).errors, undefined);
});
