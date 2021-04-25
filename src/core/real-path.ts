import nodePath from "path";

// TODO: resolve symbolic paths

export function realPathSync(path: string) {
  return nodePath.resolve(path);
}

// We gotta make this asynchonrous because users' code would break
// once they used the actual `Deno.realPath`.

export async function realPath(path: string) {
  return nodePath.resolve(path);
}
