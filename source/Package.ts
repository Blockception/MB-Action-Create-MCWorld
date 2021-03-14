import path from "path";
import { CreateMcWorld } from "./Actions/Archive.ts/CreateMcWorld";
import { TrimFiles } from "./Actions/Files/Trimming";
import { JsonProcessing } from "./Actions/Json/Processing";
import { PackageContext } from "./types/PackageContext";

export function Package(Context: PackageContext): string {
  if (Context.ProcessJson) {
    JsonProcessing(Context);
  }
  if (Context.TrimFiles) {
    TrimFiles(Context);
  }

  let WorldFilepath = CreateMcWorld(Context);

  return WorldFilepath;
}
