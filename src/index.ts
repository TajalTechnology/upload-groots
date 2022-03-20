import fs = require('fs');
import S3 = require('aws-sdk/clients/s3');
import path = require('path');
import { IFileUpload } from './interface';

export class FileUploader {
  file: IFileUpload;

  constructor(file: IFileUpload) {
    this.file = file;
  }

  uploadFile(creadentials: any, file: any) {
    this.file.uploadFile(creadentials, file);
  }
}
