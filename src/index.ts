import fs = require('fs');
import S3 = require('aws-sdk/clients/s3');
import path = require('path');
import { IFileUpload } from './interface';

export class AWS implements IFileUpload {
  uploadFile(creadentials: any, file: any) {
    const accessKeyId = creadentials.accessKeyId;
    const secretAccessKey = creadentials.secretAccessKey;
    const region = creadentials.region;
    const bucketName = creadentials.bucketName;
    const fileStream = fs.createReadStream(file.path);

    const uploadParams = {
      Bucket: bucketName,
      Body: fileStream,
      Key: file.filename,
    };

    const s3 = new S3({
      region,
      accessKeyId,
      secretAccessKey,
    });

    return s3.upload(uploadParams).promise();
  }
}
