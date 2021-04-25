import fs from "fs";

import { lstat, lstatSync } from "./lstat";

export interface RemoveOpts {
  recursive?: boolean;
}

export function removeSync(path: string | URL, options?: RemoveOpts) {
  const meta = lstatSync(path);
  if (meta.isDirectory) {
    fs.rmdirSync(path, options);
  } else {
    fs.rmSync(path, options);
  }
}

export async function remove(path: string | URL, options?: RemoveOpts) {
  const meta = await lstat(path);
  if (meta.isDirectory) {
    await fs.promises.rmdir(path, options);
  } else {
    await fs.promises.rm(path, options);
  }
}
