import { cp, mkdir, readFile, readdir, rename, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";

// This build-time script publishes only the static client, never the SSR bundle.
const output = path.resolve("dist");
const client = path.join(output, "client");
await stat(path.join(client, "index.html"));
const staging = path.resolve(".github-pages-static");
await rm(staging, { recursive: true, force: true });
await cp(client, staging, { recursive: true });
await rm(path.join(staging, ".lovable"), { recursive: true, force: true });

// Asset pointers need physical files because Pages has no Lovable asset proxy.
const previewOrigin = "https://id-preview--8a2371cb-a463-4eec-b6af-95747e82a098.lovable.app";
for (const filename of await readdir("src/assets/certs")) {
  if (!filename.endsWith(".asset.json")) continue;
  const asset = JSON.parse(await readFile(path.join("src/assets/certs", filename), "utf8"));
  if (!asset.url.startsWith("/__l5e/assets-v1/") || asset.url.includes("..")) {
    throw new Error(`Invalid asset path in ${filename}`);
  }
  const response = await fetch(new URL(asset.url, previewOrigin));
  if (!response.ok) throw new Error(`Cannot download ${filename}: HTTP ${response.status}`);
  const bytes = new Uint8Array(await response.arrayBuffer());
  if (bytes.length !== asset.size || !response.headers.get("content-type")?.includes(asset.content_type)) {
    throw new Error(`Unexpected certificate content for ${filename}`);
  }
  const destination = path.join(staging, asset.url.slice(1));
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, bytes);
}
await writeFile(path.join(staging, ".nojekyll"), "");
await rm(output, { recursive: true, force: true });
await rename(staging, output);
console.log("GitHub Pages static portfolio prepared in dist.");