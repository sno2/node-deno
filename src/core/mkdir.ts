import fs from "fs";

export interface MakeDirOpts {
  recursive?: boolean;
  mode?: number;
}

const fillOpts = (opts?: MakeDirOpts): MakeDirOpts => ({
  recursive: false,
  ...opts,
});

export function mkdirSync(path: string | URL, options?: MakeDirOpts) {
  fs.mkdirSync(path, fillOpts(options));
}

export async function mkdir(path: string | URL, options?: MakeDirOpts) {
  await fs.promises.mkdir(path, fillOpts(options));
}
