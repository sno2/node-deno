import type { MakeTempOpts } from "../core/make-temp-dir";

export function generateTempName(opts?: MakeTempOpts): string {
  let hash = "";
  if (opts?.prefix !== undefined) hash = `${opts.prefix}${hash}`;
  hash += Math.floor(Math.random() * (32 ** 8 - 1) + 32 ** 3).toString(32);
  if (opts?.suffix !== undefined) hash += opts.suffix;
  return hash;
}
