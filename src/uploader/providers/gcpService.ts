import { format } from 'prettier';
import { IFileUpload } from '../../types/interface';
import { Storage, Bucket } from '@google-cloud/storage';
import { UPLOAD_CONSTANTS, credential } from '../../types/upload.constants';
import { fileValidation } from '../helper/valdates';

export class GCP implements IFileUpload {
  private storage: Storage;
  private bucket: any = Bucket;
  constructor() {
    this.storage = new Storage({});
    this.bucket = this.bucket;
  }

  async deleteFile(file: any) {
    const bucketName = credential.bucketName;
    const fileExits = await this.bucket.file(file.fileName).exists();
    if (!fileExits) throw new Error(UPLOAD_CONSTANTS.NOT_FOUND);

    if (bucketName) {
      return await this.storage.bucket(bucketName).file(file.fileName).delete();
    } else {
      return UPLOAD_CONSTANTS.CREDENTIALS_MISSING;
    }
  }

  async fileExists(fileName: string) {
    return await this.bucket.file(fileName).exists();
  }

  async uploadFile(file: any) {
    /* set-up */
    const bucketName: any = credential.bucketName;
    const storage = new Storage({ keyFilename: file.fileName });
    const bucket = storage.bucket(bucketName);
    const linkFile = bucket.file(file.originalname);

    if (Option) {
      const validation = await fileValidation(file, Option);
      if (validation === false) return UPLOAD_CONSTANTS.FILE_VALIDATION_ERROR;
    }

    const stream = linkFile.createWriteStream({
      metadata: { contentType: file.mimetype },
      resumable: false,
    });

    stream.on('error', (err: string) => {
      throw new Error(UPLOAD_CONSTANTS.ERROR);
    });

    stream.on('finish', async () => {
      await this.bucket.file(file.fileName).makePublic();
      const publicUrl = format(`${UPLOAD_CONSTANTS.GCP_URL}/${this.bucket.name}/${linkFile.name}`);
      return publicUrl;
    });

    stream.end(file.buffer);
  }

  async getFile(fileName: string, bucketName: string) {
    const file = this.storage.bucket(bucketName).file(fileName);
    return file;
  }
}
