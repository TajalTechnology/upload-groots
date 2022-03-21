import { IFileUpload } from '../../types/interface';
export declare class GCP implements IFileUpload {
    private storage;
    constructor();
    deleteFile(creadentials: any, file: any): Promise<any>;
    uploadFile(creadentials: any, file: any): Promise<void>;
    getFile(fileName: string, bucketName: string): Promise<import("@google-cloud/storage/build/src/file").File>;
}
