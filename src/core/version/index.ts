import { v8 } from "./v8";

export * from "./v8";

export abstract class Version {
  static v8 = v8();
  /** The version of Deno runtime currently being mocked. */
  static deno = "1.9.1" as const;
  static typescript = undefined as never;
}

Object.freeze(Version);
