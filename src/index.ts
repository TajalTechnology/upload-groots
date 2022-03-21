import fs = require('fs');
import path = require('path');
import { AWS } from './awsService';
import { GCP } from './gcpService';
import S3 = require('aws-sdk/clients/s3');
import { IFileUpload } from './interface';
require('dotenv').config();

export class FileUploader {
  file: IFileUpload;

  constructor(file: IFileUpload) {
    this.file = file;
  }

  uploadFile(creadentials: any, file: any) {
    return this.file.uploadFile(creadentials, file);
  }
}

export const awsFileUploadService = new FileUploader(new AWS());
export const gcpFileUploadService = new FileUploader(new GCP());
