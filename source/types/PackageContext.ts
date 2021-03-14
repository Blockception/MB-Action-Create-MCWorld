export class PackageContext {
  public ProcessJson: boolean;
  public TrimFiles: boolean;
  public Folder: string;

  constructor() {
    this.ProcessJson = true;
    this.TrimFiles = true;
    this.Folder = "";
  }
}
