import path from "path";
import { CreateMcWorld } from "./Actions/Archive.ts/CreateMcWorld";
import { TrimFiles } from "./Actions/Files/Trimming";
import { JsonProcessing } from "./Actions/Json/Processing";
import { PackageContext } from "./types/PackageContext";

export async function Package(Context: PackageContext): Promise<string> {
  if (Context.ProcessJson) {
    JsonProcessing(Context);
  }
  if (Context.TrimFiles) {
    TrimFiles(Context);
  }

  return CreateMcWorld(Context);
}
