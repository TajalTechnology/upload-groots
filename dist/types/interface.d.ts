export interface IFileUpload {
    uploadFile(file: any, Option?: any): any;
    deleteFile(file: any): any;
    getFile(fileName: string, bucketName: string): any;
}
export declare enum Providers {
    AWS = "AWS",
    GCP = "GCP"
}
