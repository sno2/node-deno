import { Deno as StableDeno } from "./deno-stable";
import type { ConsoleSize } from "./models/console-size";

import os from "os";

export abstract class Deno extends StableDeno {
  /** Compatibility notice: this method requires the new `mask` due to Node.js limitations. */
  static mask(mask: number): number {
    const _mask = process.umask(mask);
    // "This call always returns what the umask was before the call."
    return _mask;
  }

  static consoleSize(rid: number): ConsoleSize {
    const { columns, rows } = process.stdout;
    return { rows, columns };
  }

  static loadavg(): number[] {
    return os.loadavg();
  }

  static osRelease(): never {
    throw Error("Unimplemented");
  }

  static systemMemoryInfo(): never {
    throw Error("Unimplemented");
  }

  static systemCpuInfo(): never {
    throw Error("Unimplemented");
  }

  // TODO: consider plugins (`Deno.openPlugin`)

  static formatDiagnostics(): never {
    throw Error("Unimplemented");
  }

  // TODO: consider bundling (`Deno.emit`)

  // TODO: consider Signal API
}

Object.freeze(Deno);
