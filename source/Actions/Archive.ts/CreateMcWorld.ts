import { PackageContext } from "../../types/PackageContext";
import AdmZip from "adm-zip";

export function CreateMcWorld(Context: PackageContext): string {
  let filepath = Context.OutputFile;
  console.log("Writing: " + filepath);

  let Zip = new AdmZip();

  Zip.addLocalFolder(Context.Folder);
  Zip.writeZip(filepath);

  return filepath;
}
