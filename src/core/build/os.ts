import { platform as getPlatform } from "os";

export type BuildOS =
  | "windows"
  | "aix"
  | "android"
  | "darwin"
  | "freebsd"
  | "linux"
  | "openbsd"
  | "sunos"
  | "cygwin"
  | "netbsd";

export function os(): BuildOS {
  const platform = getPlatform();
  switch (platform) {
    case "win32":
      return "windows";
    default:
      return platform;
  }
}
