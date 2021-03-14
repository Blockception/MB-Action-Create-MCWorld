import { CollectFiles } from "../../Files/Collect";
import { PackageContext } from "../../types/PackageContext";
import * as JSONC from "comment-json";
import * as fs from "fs";

export function JsonProcessing(Context: PackageContext): void {
  console.log("Processing json files");

  let jsonFiles = CollectFiles(Context.Folder, ["**/*.json", "**/*.jsonc"]);

  for (let I = 0; I < jsonFiles.length; I++) {
    let jFile = jsonFiles[I];

    ProcessFile(jFile);
  }
}

export function ProcessFile(filepath: string): void {
  console.log("\tProcessing: " + filepath);

  let Content = fs.readFileSync(filepath).toString();

  //Read object
  let Object = JSONC.parse(Content, undefined, true);
  //Write object back
  Content = JSONC.stringify(Object);

  //Write file back
  fs.writeFileSync(filepath, Content, { encoding: "utf8" });
}
