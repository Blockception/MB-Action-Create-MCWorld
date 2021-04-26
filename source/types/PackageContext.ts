export class PackageContext {
  public ProcessJson: boolean;
  public TrimFiles: boolean;
  public Folder: string;
  public OutputFile: string;

  constructor() {
    this.ProcessJson = true;
    this.TrimFiles = true;
    this.Folder = "";
    this.OutputFile = "";
  }
}
