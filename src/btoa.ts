export function btoa(s: string) {
  return Buffer.from(s, "utf8").toString("base64");
}
