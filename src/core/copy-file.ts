import fs from "fs";

export function copyFileSync(fromPath: string | URL, toPath: string | URL) {
  fs.copyFileSync(fromPath, toPath);
}

export async function copyFile(fromPath: string | URL, toPath: string | URL) {
  await fs.promises.copyFile(fromPath, toPath);
}
