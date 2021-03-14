import path from "path";
import * as fs from "fs";

/**
 * Tries a filepath from the given data, if existing files are found then a number is added onto the end of the filename
 * @param Folder The folder to place the file in
 * @param Name The base name of the file
 * @param Extension The extension of the file without the .
 */
export function GetSafeFilepath(Folder: string, Name: string, Extension: string): string {
  let filepath = path.join(Folder, Name + "." + Extension);
  let index = 0;

  while (fs.existsSync(filepath)) {
    filepath = path.join(Folder, Name + index.toString() + "." + Extension);
    index++;
  }

  return filepath;
}
