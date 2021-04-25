import fs from "fs";

import type { FileInfo } from "../models/file-info";

import { fsStatToFileInfo } from "../utils/fs-stat-to-file-info";

export function lstatSync(path: string | URL): FileInfo {
  const stat = fs.lstatSync(path);
  return fsStatToFileInfo(stat);
}

export async function lstat(path: string | URL) {
  const stat = await fs.promises.lstat(path);
  return fsStatToFileInfo(stat);
}
