import fs = require('fs');
var aws = require('aws-sdk');
import S3 = require('aws-sdk/clients/s3');
import path = require('path');
import { IFileUpload } from '../../types/interface';

export class AWS implements IFileUpload {
  s3 = new aws.S3();
  constructor(s3 = new aws.S3()) {
    this.s3 = s3;
  }
  async uploadFile(creadentials: any, file: any) {
    const accessKeyId = creadentials.accessKeyId;
    const secretAccessKey = creadentials.secretAccessKey;
    const region = creadentials.region;
    const bucketName = creadentials.bucketName;
    const fileStream = fs.createReadStream(file.path);

    const uploadParams = { Bucket: bucketName, Body: fileStream, Key: file.filename };
    const s3 = new S3({ region, accessKeyId, secretAccessKey });
    return await s3.upload(uploadParams).promise();
  }

  async deleteFile(creadentials: any, file: any) {
    const bucketName = creadentials.bucketName;
    const params = { Bucket: bucketName, Key: file.filename };

    const exists = await this.s3.headObject(params);
    if (exists) {
      const deleted = this.s3.deleteObject(params);
      if (!deleted) return false;
      return true;
    } else {
      return false;
    }
  }

  async getFile(fileName: string, bucketName: string) {
    const params = { bucketName, fileName };
    const file = await this.s3.getObject(params).promise();
    if (file) return file;
    else return false;
  }
}
