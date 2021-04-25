import type { MakeTempOpts } from "./make-temp-dir";

import path from "path";
import os from "os";
import fs from "fs";

import { generateTempName } from "../utils/generate-temp-name";

export type { MakeTempOpts };

export function makeTempFileSync(opts?: MakeTempOpts) {
  const location = path.resolve(os.tmpdir(), generateTempName(opts));
  fs.closeSync(fs.openSync(location, "w"));
}

export async function makeTempFile(opts?: MakeTempOpts) {
  const location = path.resolve(os.tmpdir(), generateTempName(opts));
  // TODO: make sure this is doing things right
  await fs.promises.open(location, "w");
}
