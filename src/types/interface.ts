export interface IFileUpload {
  uploadFile(file: any, Option?: any): any;
  deleteFile(file: any, Option?: any): any;
  getFile(fileName: string, bucketName: string): any;
}

export enum Providers {
  AWS = 'AWS',
  GCP = 'GCP',
}
