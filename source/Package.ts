import path from "path";
import { TrimFiles } from "./Actions/Files/Trimming";
import { JsonProcessing } from "./Actions/Json/Processing";
import { PackageContext } from "./types/PackageContext";

export function Package(Context: PackageContext): string {
  let WorldFilepath = path.join(Context.Folder, "world.mcworld");

  if (Context.ProcessJson) {
    JsonProcessing(Context);
  }
  if (Context.TrimFiles) {
    TrimFiles(Context);
  }

  return WorldFilepath;
}
