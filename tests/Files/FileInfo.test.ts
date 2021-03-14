import { FileInfo } from "../../source/Files/FileInfo";

const FilepathExample = {
  filepath: "C:/world/behaviours_packs/EW-BP/entities/example.entity.json",
  extension: "json",
  folder: "C:/world/behaviours_packs/EW-BP/entities",
  filename: "example.entity",
};

describe("FileInfo tests", () => {
  test("extension test", () => {
    let FI = new FileInfo(FilepathExample.filepath);

    expect(FI.Extension).toEqual(FilepathExample.extension);
  });

  test("filename test", () => {
    let FI = new FileInfo(FilepathExample.filepath);

    expect(FI.Filename).toEqual(FilepathExample.filename);
  });

  test("Folder test", () => {
    let FI = new FileInfo(FilepathExample.filepath);

    expect(FI.Folder).toEqual(FilepathExample.folder);
  });

  test("Fullpath test", () => {
    let FI = new FileInfo(FilepathExample.filepath);

    expect(FI.Fullpath).toEqual(FilepathExample.filepath);
  });
});
