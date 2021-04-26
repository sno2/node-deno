export function atob(s: string) {
  return Buffer.from(s, "base64").toString("utf8");
}
