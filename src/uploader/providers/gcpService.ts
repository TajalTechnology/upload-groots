import fs = require('fs');
import path = require('path');
import { format } from 'prettier';
import S3 = require('aws-sdk/clients/s3');
import { IFileUpload } from '../../types/interface';
import { Storage, Bucket } from '@google-cloud/storage';
import { UPLOAD_CONSTANTS } from '../../types/upload.constants';

export class GCP implements IFileUpload {
  storage = new Storage();

  async deleteFile(creadentials: any, file: any) {
    const bucket = creadentials.bucketName;
    const fileExits = await bucket.file(file.fileName).exists();

    if (fileExits) {
      const objectName = 'File name modification if need';
      return await bucket.file(objectName).delete();
    } else {
      throw new Error(UPLOAD_CONSTANTS.NOT_FOUND);
    }
  }

  uploadFile(creadentials: any, file: any) {
    const bucket = creadentials.bucketName;
    const linkFile = bucket.file(file.fileName);
    const stream = linkFile.createWriteStream();

    stream.on('error', (err: string) => {
      throw new Error('Method not implemented.' + err);
    });

    stream.on('finish', () => {
      const publicUrl = format(`https://storage.googleapis.com/${this.bucket.name}/${linkFile.name}`);
      return publicUrl;
    });

    stream.end(file.buffer);
  }

  async getFile(fileName: string, bucketName: string) {
    return `https://storage.googleapis.com/${bucketName}/${fileName}`;
  }
}
