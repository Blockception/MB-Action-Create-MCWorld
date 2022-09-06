import { CreateMcWorld } from "./Actions/Archive.ts/CreateMcWorld";
import { TrimFiles } from "./Actions/Files/Trimming";
import { JsonProcessing } from "./Actions/Json/Processing";
import { PackageContext } from "./types/PackageContext";

/**
 * Returns the path to the mcworld
 * @param Context The context of the package
 * @returns The path to the mcworld
 */
export function Package(Context: PackageContext): string {
  if (Context.ProcessJson) {
    JsonProcessing(Context);
  }
  if (Context.TrimFiles) {
    TrimFiles(Context);
  }

  return CreateMcWorld(Context);
}
