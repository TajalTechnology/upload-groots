import { IApp } from './types/app.interface';
import { IFileUpload, Providers } from './types/interface';
export declare class FileStore implements IApp {
    protected uploader: IFileUpload;
    constructor(provider: Providers);
    upload(file: any, Option?: any): any;
    delete(file: any): any;
    getFile(fileName: string, bucketName: string): any;
}
export declare const fileStorageAws: FileStore;
export declare const fileStorageGcp: FileStore;
