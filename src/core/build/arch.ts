import { arch as _arch } from "os";

export function arch() {
  const arch = _arch();
  switch (arch) {
    case "x64":
      return "x86_64";
    default:
      return arch;
  }
}
