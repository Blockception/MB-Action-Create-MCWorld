import { CreateMcWorld } from "./Actions/Archive.ts/CreateMcWorld";
import { TrimFiles } from "./Actions/Files/Trimming";
import { JsonProcessing } from "./Actions/Json/Processing";
export async function Package(Context) {
    if (Context.ProcessJson) {
        JsonProcessing(Context);
    }
    if (Context.TrimFiles) {
        TrimFiles(Context);
    }
    return CreateMcWorld(Context);
}
//# sourceMappingURL=Package.js.map