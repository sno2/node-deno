import fs from "fs";

export function linkSync(oldPath: string, newPath: string) {
  fs.linkSync(oldPath, newPath);
}

export async function link(oldPath: string, newPath: string) {
  await fs.promises.link(oldPath, newPath);
}
