export interface IApp {
  upload(file: any): any; // TODO: define valid return type
  delete(file: any): any;
  getFile(fileName: string, bucketName: string): any;
}
