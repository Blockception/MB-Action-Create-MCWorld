export class FileInfo {
  readonly Filename: string;
  readonly Extension: string;
  readonly Folder: string;
  readonly Fullpath: string;

  constructor(Filepath: string) {
    this.Fullpath = Filepath;
    let Index = Filepath.lastIndexOf(".");

    if (Index >= 0) {
      this.Extension = Filepath.substring(Index + 1, Filepath.length);
      Filepath = Filepath.substring(0, Index);
    } else {
      this.Extension = "";
    }

    Index = Filepath.lastIndexOf("/");
    if (Index >= 0) {
      this.Filename = Filepath.substring(Index + 1, Filepath.length);
      this.Folder = Filepath.substring(0, Index);
    } else {
      this.Filename = "";
      this.Folder = "";
    }
  }
}
