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
    if (!fileExits) throw new Error(UPLOAD_CONSTANTS.NOT_FOUND);

    const objectName = 'File name modification if need';
    return await bucket.file(objectName).delete();
  }

  uploadFile(creadentials: any, file: any) {
    const bucket = creadentials.bucketName;
    const linkFile = bucket.file(file.fileName);
    const stream = linkFile.createWriteStream();

    stream.on('error', (err: string) => {
      throw new Error(UPLOAD_CONSTANTS.ERROR);
    });

    stream.on('finish', () => {
      const publicUrl = format(`${UPLOAD_CONSTANTS.GCP_URL}/${bucket.name}/${linkFile.name}`);
      return publicUrl;
    });

    stream.end(file.buffer);
  }

  async getFile(fileName: string, bucketName: string) {
    return `${UPLOAD_CONSTANTS.GCP_URL}/${bucketName}/${fileName}`;
  }
}
