import { IFileUpload } from '../../types/interface';
import { Bucket } from '@google-cloud/storage';
export declare class GCP implements IFileUpload {
    private storage;
    private bucket;
    constructor(bucket: Bucket);
    deleteFile(file: any): Promise<string | [import("teeny-request").Response<any>]>;
    fileExists(fileName: string): Promise<[boolean]>;
    uploadFile(file: any): Promise<void>;
    getFile(fileName: string, bucketName: string): Promise<import("@google-cloud/storage/build/src/file").File>;
}
