import * as fs from "fs";
import { CollectFiles } from "../../Files/Collect";
import { FileInfo } from "../../Files/FileInfo";
import { PackageContext } from "../../types/PackageContext";

export function TrimFiles(Context: PackageContext): void {
  console.log("Trimming files");

  let files = CollectFiles(Context.Folder, "**/*");

  for (let I = 0; I < files.length; I++) {
    let filepath = files[I];
    if (ShouldRemove(filepath)) {
      console.log("\tRemoving: " + filepath);

      fs.unlinkSync(filepath);
    }
  }
}

export function ShouldRemove(filepath: string): boolean {
  let Info = new FileInfo(filepath);

  //Check extension first
  switch (Info.Extension.toLowerCase()) {
    case "":
    case "dat":
    case "fsb":
    case "jpeg":
    case "jpg":
    case "js":
    case "jsonc":
    case "jsonc":
    case "lang":
    case "ldb":
    case "log":
    case "mcfunction":
    case "ogg":
    case "png":
    case "tga":
    case "txt":
    case "wav":
      break;

    case "dat_old":
    case "gitattributes":
    case "gitignore":
    default:
      return true;
  }

  //Possible blacklisted filename / others

  return false;
}
