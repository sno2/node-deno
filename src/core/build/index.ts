import { os } from "./os";
import { arch } from "./arch";

export * from "./arch";
export * from "./os";

export abstract class Build {
  // TODO(sno2): consider if `os` and `arch` should be computed right away

  static readonly os = os();

  static readonly arch = arch();

  static readonly vendor = undefined as never;
}

Object.freeze(Build);
