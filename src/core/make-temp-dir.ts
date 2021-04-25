import path from "path";
import os from "os";

import { mkdirSync, mkdir } from "./mkdir";
import { generateTempName } from "../utils/generate-temp-name";

export interface MakeTempOpts {
  dir?: string;
  prefix?: string;
  suffix?: string;
}

export function makeTempDirSync(opts?: MakeTempOpts): string {
  const location = path.resolve(os.tmpdir(), generateTempName(opts));
  mkdirSync(location);
  return location;
}

export async function makeTempDir(opts?: MakeTempOpts): Promise<string> {
  const location = path.resolve(os.tmpdir(), generateTempName(opts));
  await mkdir(location);
  return location;
}
