import fs from "fs";

export function readTextFileSync(path: string | URL) {
  return fs.readFileSync(path, "utf8");
}

export async function readTextFile(path: string | URL) {
  return await fs.promises.readFile(path, "utf8");
}
