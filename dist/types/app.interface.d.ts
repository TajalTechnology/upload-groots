export interface IApp {
    upload(file: any): any;
    delete(file: any): any;
    getFile(fileName: string, bucketName: string): any;
}
