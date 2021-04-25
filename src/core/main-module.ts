import url from "url";

// TODO(sno2): make sure this works everywhere
export function getMainModule() {
  const location = require.main?.filename ?? import.meta?.url;
  return url.pathToFileURL(location).href;
}
