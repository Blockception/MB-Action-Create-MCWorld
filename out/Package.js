"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Package = void 0;
const path_1 = __importDefault(require("path"));
function Package(Context) {
    let WorldFilepath = path_1.default.join(Context.Folder, "world.mcworld");
    return WorldFilepath;
}
exports.Package = Package;
//# sourceMappingURL=Package.js.map