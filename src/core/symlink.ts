import fs from "fs";

import { Build } from "./build";

export interface SymLinkOpts {
  type: "file" | "dir";
}

export function symlinkSync(
  oldPath: string,
  newPath: string,
  options?: SymLinkOpts
) {
  let nodeType = options && Build.os === "windows" ? options.type : undefined;
  fs.symlinkSync(oldPath, newPath, nodeType);
}

export async function symlink(
  oldPath: string,
  newPath: string,
  options?: SymLinkOpts
): Promise<void> {
  let nodeType = options && Build.os === "windows" ? options.type : undefined;
  await fs.promises.symlink(oldPath, newPath, nodeType);
}
