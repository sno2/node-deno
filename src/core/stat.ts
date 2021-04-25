import fs from "fs";

import { fsStatToFileInfo } from "../utils/fs-stat-to-file-info";

export function statSync(path: string | URL) {
  const stat = fs.statSync(path);
  return fsStatToFileInfo(stat);
}

export async function stat(path: string | URL) {
  const stat = await fs.promises.stat(path);
  return fsStatToFileInfo(stat);
}
