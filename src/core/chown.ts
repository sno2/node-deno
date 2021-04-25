import fs from "fs";

export function chownSync(
  path: string | URL,
  uid: number | null,
  gid: number | null
) {
  if (uid ?? gid ?? false) {
    fs.chownSync(path, uid!, gid!);
  }
}

export async function chown(
  path: string | URL,
  uid: number | null,
  gid: number | null
) {
  if (uid ?? gid ?? false) {
    await fs.promises.chown(path, uid!, gid!);
  }
}
