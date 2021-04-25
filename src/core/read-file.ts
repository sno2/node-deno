import fs from "fs";

// TODO: consider if we should just return Node.js `Buffer` or convert
// it to straight `Unit8Array`

export function readFileSync(path: string | URL) {
  return new Uint8Array(fs.readFileSync(path).buffer);
}

export async function readFile(path: string | URL) {
  const { buffer } = await fs.promises.readFile(path);
  return new Uint8Array(buffer);
}
