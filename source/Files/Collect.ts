import * as fg from "fast-glob";

export function CollectFiles(folder: string, pattern: string | string[]): string[] {
  let dirs = createPattern(folder, pattern);

  return fg.sync(dirs, { absolute: true, onlyFiles: true });
}

function createPattern(folder: string, pattern: string | string[]): string[] {
  let out: string[] = [];

  if (Array.isArray(pattern)) {
    for (let I = 0; I < pattern.length; I++) {
      const entry = pattern[I];

      out.push(folder + entry);
    }
  } else {
    out.push(folder + pattern);
  }

  return out;
}
