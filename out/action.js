"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const Package_1 = require("./Package");
const PackageContext_1 = require("./types/PackageContext");
//Leave this be
const corexp = require("@actions/core");
//Start code
try {
    let Context = new PackageContext_1.PackageContext();
    //grabbing context
    Context.Folder = corexp.getInput("folder");
    Context.ProcessJson = corexp.getInput("processJson") === "true";
    Context.TrimFiles = corexp.getInput("trimFiles") === "true";
    console.log("starting on: " + Context.Folder);
    let filepath = "";
    if (fs.existsSync(Context.Folder)) {
        filepath = Package_1.Package(Context);
    }
    else {
        throw { message: "Couldnt not find folder: " + Context.Folder };
    }
    corexp.setOutput("worldFilepath", filepath);
    if (filepath !== "" && fs.existsSync(filepath)) {
        console.log("created: " + filepath);
        process.exit(0);
    }
    else {
        console.log("failed to create world");
        process.exit(1);
    }
}
catch (error) {
    let message;
    if (error.message)
        message = error.message;
    else
        message = JSON.stringify(error);
    if (corexp)
        corexp.setFailed(message);
    else {
        console.log(message);
        process.exit(1);
    }
}
//# sourceMappingURL=action.js.map