import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server renders the MOMO storefront", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>MOMO/);
  assert.match(html, /GOOD TREATS, GOOD DAYS/);
  assert.match(html, /\uC6B0\uB9AC \uC544\uC774\uC5D0\uAC8C/);
  assert.match(html, /\uD5C8\uBE0C/);
  assert.match(html, /\uAC00\uC774\uB4DC/);
});

test("page source includes the requested storefront interactions", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(page, /useState/);
  assert.match(page, /setCategory/);
  assert.match(page, /setCart/);
  assert.match(page, /aria-label/);
  assert.match(page, /product-grid/);
});
