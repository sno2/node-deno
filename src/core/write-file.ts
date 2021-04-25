import fs from "fs";

export interface WriteFileOpts {
  append?: boolean;
  create?: boolean;
  mode?: number;
}

export function writeFileSync(
  path: string | URL,
  data: Uint8Array,
  options?: WriteFileOpts
) {
  // TODO: handle options correctly
  const fsOpts = options?.mode ? { mode: options.mode } : undefined;
  fs.writeFileSync(path, data, fsOpts);
}

export async function writeFile(
  path: string | URL,
  data: Uint8Array,
  options?: WriteFileOpts
) {
  const fsOpts = options?.mode ? { mode: options.mode } : undefined;
  await fs.promises.writeFile(path, data, fsOpts);
}
