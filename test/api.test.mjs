import assert from "node:assert/strict";
import test from "node:test";
import { POST } from "../src/app/api/enquiries/route.ts";

const valid = {
  fullName: "Test User", businessName: "Test Business", email: "test@example.com",
  phone: "", industry: "plumbing", serviceInterest: "website",
  message: "A synthetic enquiry for automated testing.", privacy: true,
};
async function check(body, status, extraHeaders = {}) {
  const request = new Request("http://localhost/api/enquiries", {
    method: "POST", headers: { "content-type": "application/json", ...extraHeaders }, body,
  });
  const response = await POST(request);
  assert.equal(response.status, status);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.match(response.headers.get("content-type"), /application\/json/);
  const data = await response.json();
  assert.equal(data.ok, false);
  assert.equal(data.demo, true);
  assert.equal(typeof data.message, "string");
  assert.ok(data.message.length > 0);
  assert.equal(JSON.stringify(data).includes(valid.email), false);
  return data;
}
test("valid enquiry without Content-Length returns demo 503", async () => {
  await check(JSON.stringify(valid), 503);
});
test("valid enquiry with Content-Length returns demo 503", async () => {
  const body = JSON.stringify(valid);
  await check(body, 503, { "content-length": String(Buffer.byteLength(body)) });
});
test("invalid submission returns 400 with field errors", async () => {
  const data = await check(JSON.stringify({ ...valid, industry: "unknown" }), 400);
  assert.deepEqual(data.errors, { industry: "Select a valid industry." });
});
for (const body of ["{", "null", "[]", "{}", '"text"']) {
  test(`malformed or invalid JSON payload ${body} returns 400`, async () => { await check(body, 400); });
}
test("unsupported content type returns 415", async () => {
  await check(JSON.stringify(valid), 415, { "content-type": "text/plain" });
});
test("oversized declared request returns 413", async () => {
  await check("{}", 413, { "content-length": "16385" });
});
test("oversized request without Content-Length returns 413", async () => {
  await check("x".repeat(16385), 413);
});
test("actual size overrides understated Content-Length", async () => {
  await check("x".repeat(16385), 413, { "content-length": "2" });
});
for (const length of ["-1", "invalid", "1.5"]) {
  test(`invalid Content-Length ${length} returns 413`, async () => { await check("{}", 413, { "content-length": length }); });
}
test("invalid UTF-8 returns 400", async () => { await check(new Uint8Array([255]), 400); });
test("streamed oversized request cancels reading", async () => {
  let cancelled = false;
  const body = new ReadableStream({
    pull(controller) { controller.enqueue(new Uint8Array(9000)); },
    cancel() { cancelled = true; },
  });
  const request = new Request("http://localhost/api/enquiries", {
    method: "POST", headers: { "content-type": "application/json" }, body, duplex: "half",
  });
  assert.equal((await POST(request)).status, 413);
  assert.equal(cancelled, true);
});
