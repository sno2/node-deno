export function normalizeUrl(url: string | URL) {
  if (url instanceof URL) {
    return url.toString();
  }
  return url;
}
