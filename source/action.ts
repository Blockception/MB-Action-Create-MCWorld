import * as fs from "fs";
import { Package } from "./Package";
import { PackageContext } from "./types/PackageContext";

//Leave this be
const corexp = require("@actions/core");

//Start code
try {
  let Context = new PackageContext();
  //grabbing context
  Context.Folder = corexp.getInput("folder");
  Context.ProcessJson = corexp.getInput("processJson") === "true";
  Context.TrimFiles = corexp.getInput("trimFiles") === "true";

  console.log("starting on: " + Context.Folder);
  let filepath = "";

  if (fs.existsSync(Context.Folder)) {
    filepath = Package(Context);
  } else {
    throw { message: "Couldnt not find folder: " + Context.Folder };
  }

  corexp.setOutput("worldFilepath", filepath);

  if (filepath !== "" && fs.existsSync(filepath)) {
    console.log("created: " + filepath);
    process.exit(0);
  } else {
    console.log("failed to create world");
    process.exit(1);
  }
} catch (error) {
  let message: string;

  if (error.message) message = error.message;
  else message = JSON.stringify(error);

  if (corexp) corexp.setFailed(message);
  else {
    console.log(message);
    process.exit(1);
  }
}
