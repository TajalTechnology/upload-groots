import { IFileUpload } from '../../types/interface';
export declare class AWS implements IFileUpload {
    private Bucket;
    private region;
    private accessKeyId;
    private secretAccessKey;
    private s3;
    constructor(s3?: any);
    uploadFile(file: any, Option?: any): Promise<any>;
    deleteFile(file: any): Promise<any>;
    getFile(fileName: string, bucketName: string): Promise<any>;
}
