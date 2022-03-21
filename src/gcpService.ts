import fs = require('fs');
import path = require('path');
import S3 = require('aws-sdk/clients/s3');
import { IFileUpload } from './interface';

export class GCP implements IFileUpload {
  uploadFile(creadentials: any, file: any) {
    return 'No Service available';
  }
}
