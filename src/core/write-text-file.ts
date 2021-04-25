import type { WriteFileOpts } from "./write-file";

import fs from "fs";

export type { WriteFileOpts };

// TODO: handle options correctly for both

export function writeTextFileSync(
  path: string | URL,
  data: string,
  options?: WriteFileOpts
) {
  const fsOpts = options?.mode ? { mode: options.mode } : undefined;
  fs.writeFileSync(path, data, fsOpts);
}

export async function writeTextFile(
  path: string | URL,
  data: string,
  options?: WriteFileOpts
) {
  const fsOpts = options?.mode ? { mode: options.mode } : undefined;
  await fs.promises.writeFile(path, data, fsOpts);
}
