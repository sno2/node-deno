import * as core from "./core";

type Resource = { rid: number };
type ResourceMap = Record<number, Resource>;

const resourcesSymbol = Symbol("DenoResources");

export abstract class Deno {
  protected static [resourcesSymbol]: ResourceMap = {};

  static pid = core.getPid();

  // Ref: https://github.com/denoland/deno/issues/10360
  static noColor = core.getNoColor();

  static test(...params: unknown[]): never {
    throw Error("Unimplemented.");
  }

  static exit(code?: number): never {
    return process.exit(code);
  }

  static env = core.env.Env;

  static execPath = core.getExecPath();

  static chdir(directory: string) {
    process.chdir(directory);
  }

  static cwd = core.cwd;

  static linkSync = core.linkSync;
  static link = core.link;

  // TODO: `copy`
  // TODO: `open`
  // TODO: `openSync`
  // TODO: `createSync`
  // TODO: `create`
  // TODO: `readSync`
  // TODO: `read`
  // TODO: `writeSync`
  // TODO: `write`
  // TODO: `seekSync`
  // TODO: `seekSync`
  // TODO: `fsyncSync`
  // TODO: `fsync`
  // TODO: `fdatasyncSync`
  // TODO: `fdatasync`

  static close(rid: number) {
    delete Deno[resourcesSymbol][rid];
  }

  // TODO: `stdin`
  // TODO: `stdout`
  // TODO: `stderr`

  // TODO: `isatty`

  static mkdirSync = core.mkdirSync;
  static mkdir = core.mkdir;

  static makeTempDirSync = core.makeTempDirSync;
  static makeTempDir = core.makeTempDir;

  static chmodSync = core.chmodSync;
  static chmod = core.chmod;

  static chownSync = core.chownSync;
  static chown = core.chown;

  static removeSync = core.removeSync;
  static remove = core.remove;

  static renameSync = core.renameSync;
  static rename = core.rename;

  static readTextFileSync = core.readTextFileSync;
  static readTextFile = core.readTextFile;

  static readFileSync = core.readFileSync;
  static readFile = core.readFile;

  static realPathSync = core.realPathSync;
  static realPath = core.realPath;

  // TODO: `readDirSync`
  // TODO: `readDir`

  static copyFileSync = core.copyFileSync;
  static copyFile = core.copyFile;

  // TODO: `readLinkSync`
  // TODO: `readLink`

  static lstatSync = core.lstatSync;
  static lstat = core.lstat;

  static statSync = core.statSync;
  static stat = core.stat;

  static writeFileSync = core.writeFileSync;
  static writeFile = core.writeFile;

  static writeTextFileSync = core.writeTextFileSync;
  static writeTextFile = core.writeTextFile;

  static truncateSync = core.truncateSync;
  static truncate = core.truncate;

  // TODO: `listen`
  // TODO: `listenTls`
  // TODO: `connect`
  // TODO: `connectTls`
  // TODO: `shutdown`
  // TODO: consider `metrics`

  static resources(): Record<number, unknown> {
    return Deno[resourcesSymbol];
  }

  // TODO: `watchFs`
  // TODO: `run`

  static inspect = core.inspect;

  static permissions = core.permissions.Permissions;

  static build = core.build.Build;

  static version = core.version.Version;

  static args = core.getArgs();

  static customInspect = core.getCustomInspect();

  static mainModule = core.getMainModule();

  static symlinkSync = core.symlinkSync;
  static symlink = core.symlink;

  // TODO: `ftruncateSync`
  // TODO: `ftruncate`

  // TODO: `fstatSync`
  // TODO: `fstat`
}

Object.freeze(Deno);
