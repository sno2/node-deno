import fs from "fs";

export function truncateSync(path: string, len?: number) {
  fs.truncateSync(path, len);
}

export async function truncate(path: string, len?: number) {
  await fs.promises.truncate(path, len);
}
