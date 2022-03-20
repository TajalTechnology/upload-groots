import fs = require('fs');
import S3 = require('aws-sdk/clients/s3');
import path = require('path');
import { IFileUpload } from './interface';

export class GCP implements IFileUpload {
  uploadFile(creadentials: any, file: any) {
    return 'No Service available';
  }
}
