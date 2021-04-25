import fs from "fs";

export function renameSync(oldPath: string, newPath: string) {
  fs.renameSync(oldPath, newPath);
}

export async function rename(oldPath: string, newPath: string) {
  await fs.promises.rename(oldPath, newPath);
}
