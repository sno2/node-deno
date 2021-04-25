import { Env } from "./env";

export function getNoColor() {
  return typeof Env.get("NO_COLOR") === "string";
}
