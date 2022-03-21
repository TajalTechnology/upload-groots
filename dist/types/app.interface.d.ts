export interface IApp {
    upload(creadentials: any, file: any): any;
    delete(creadentials: any, file: any): any;
    getFile(fileName: string, bucketName: string): any;
}
