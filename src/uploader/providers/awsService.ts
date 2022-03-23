import fs from 'fs';
import aws from 'aws-sdk';
import S3 from 'aws-sdk/clients/s3';
import { IFileUpload } from '../../types/interface';
import { fileValidation } from '../helper/valdates';
import { credential, UPLOAD_CONSTANTS } from '../../types/upload.constants';

export class AWS implements IFileUpload {
  //aws credentials
  private Bucket = credential.bucketName;
  private region = credential.region;
  private accessKeyId = credential.accessKeyId;
  private secretAccessKey = credential.secretAccessKey;

  private s3 = new aws.S3();
  constructor(s3 = new aws.S3()) {
    this.s3 = s3;
  }

  async uploadFile(file: any, Option?: any) {
    if (Option) {
      const validation = await fileValidation(file, Option);
      if (validation === false) return UPLOAD_CONSTANTS.FILE_VALIDATION_ERROR;
    }

    const Body = fs.createReadStream(file.path);
    const Key = file.filename;

    if (this.Bucket && Body && Key) {
      const uploadParams = { Bucket: this.Bucket, Body, Key };
      const s3 = new S3({
        region: this.region,
        accessKeyId: this.accessKeyId,
        secretAccessKey: this.secretAccessKey,
      });
      return await s3.upload(uploadParams).promise();
    } else {
      return UPLOAD_CONSTANTS.CREDENTIALS_MISSING;
    }
  }

  async deleteFile(file: any) {
    const Key = file.filename;
    if (this.Bucket && Key) {
      const params = { Bucket: this.Bucket, Key: file.filename };
      return this.s3.deleteObject(params);
    }
  }

  async getFile(fileName: string, bucketName: string) {
    const file = fs.createWriteStream(fileName);
    if (file) return file;
    else return false;
  }
}
