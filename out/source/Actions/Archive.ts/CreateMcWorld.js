import * as fs from "fs";
import path from "path";
import { GetSafeFilepath } from "../../Files/Functions";
import archiver from "archiver";
export async function CreateMcWorld(Context) {
    let filepath = GetSafeFilepath(path.join(Context.Folder, ".."), "world", "mcworld");
    console.log("Writing: " + filepath);
    const output = fs.createWriteStream(filepath);
    const archive = archiver("zip", { zlib: { level: 9 } });
    output.on("close", () => {
        console.log("Done writing file: " + filepath);
    });
    archive.on("error", (err) => {
        throw err;
    });
    archive.on("warning", function (err) {
        if (err.code === "ENOENT") {
            // log warning
        }
        else {
            // throw error
            throw err;
        }
    });
    archive.pipe(output);
    archive.directory(Context.Folder, false);
    await archive.finalize();
    return filepath;
}
//# sourceMappingURL=CreateMcWorld.js.map