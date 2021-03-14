import * as fg from "fast-glob";
import path from "path";

export function CollectFiles(folder: string, pattern: string | string[]): string[] {
  let dirs = createPattern(folder, pattern);

  return fg.sync(dirs, { absolute: true, onlyFiles: true });
}

function createPattern(folder: string, pattern: string | string[]): string[] {
  let out: string[] = [];

  if (Array.isArray(pattern)) {
    for (let I = 0; I < pattern.length; I++) {
      const entry = pattern[I];

      out.push(path.join(folder, entry));
    }
  } else {
    out.push(path.join(folder, pattern));
  }

  return out;
}
