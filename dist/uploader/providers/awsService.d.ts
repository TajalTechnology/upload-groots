import aws = require('aws-sdk');
import S3 = require('aws-sdk/clients/s3');
import { IFileUpload } from '../../types/interface';
export declare class AWS implements IFileUpload {
    s3: aws.S3;
    constructor(s3?: aws.S3);
    uploadFile(creadentials: any, file: any): Promise<S3.ManagedUpload.SendData>;
    deleteFile(creadentials: any, file: any): Promise<boolean>;
    getFile(fileName: string, bucketName: string): Promise<any>;
}
