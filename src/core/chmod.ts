import fs from "fs";

export function chmodSync(path: string | URL, mode: number) {
  fs.chmodSync(path, mode);
}

export async function chmod(path: string | URL, mode: number) {
  await fs.promises.chmod(path, mode);
}
