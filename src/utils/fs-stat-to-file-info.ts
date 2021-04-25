import type { Stats } from "fs";
import { FileInfo } from "../models/file-info";

export function fsStatToFileInfo(stat: Stats): FileInfo {
  const {
    size,
    mtime,
    atime,
    birthtime,
    mode,
    blksize,
    blocks,
    dev,
    ino,
    nlink,
    uid,
    gid,
    rdev,
  } = stat;
  const isFile = stat.isFile();
  const isDirectory = stat.isDirectory();
  const isSymlink = stat.isSymbolicLink();
  return {
    isFile,
    isDirectory,
    isSymlink,
    size,
    mtime,
    atime,
    birthtime,
    dev,
    ino,
    mode,
    nlink,
    uid,
    gid,
    rdev,
    blksize,
    blocks,
  };
}
